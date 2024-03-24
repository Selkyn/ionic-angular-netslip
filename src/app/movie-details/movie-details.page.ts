import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoviesApiService } from '../provider/movies-api.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { DetailsResult } from '../movies';
// import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MovieDetailsPage implements OnInit {
  
  // id: string;
  movieId : string; //on declare une variable vide pour stocker l'ID du film
  movie: DetailsResult; // delcare une variable pour stocker les details du film

  constructor(private moviesService: MoviesApiService, private activatedRoute: ActivatedRoute) { } 

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.movieId = params.get('id'); //recupere l'ID à partir de l'URL
      this.moviesService.getDetailMovie(this.movieId).subscribe((response: any) => { //on appelle la methode getDetailMovie de mon service
        console.log(response); 
        this.movie = response; //on stock la reponse dans movie
        console.log(this.movieId)
      });
    });
  }

}
