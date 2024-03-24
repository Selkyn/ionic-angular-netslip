import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoviesApiService } from '../provider/movies-api.service';
import { Router } from '@angular/router';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {
  keyword: string; //declare une variable qui sera le mot ecrit dans la barre de recherche
  movies: Movies[]; //on stock les films dans un tableau , ils utiliseront l'interface Movies

  constructor(private moviesApiService: MoviesApiService, private router: Router) { }

  ngOnInit() { //permet d'initialiser les composant au chargment de la page, avant le DOM
    this.search();
  }

  search() {
    this.moviesApiService.searchMovies(this.keyword).subscribe((data: any) => { //subscribe permet d'attendre la reponse de l'API
      this.movies = data.Search; //on stock le resultat de la recherche dans le tableau movies
    })
  }
  
  showMovieDetails(id: string) {
    this.router.navigate([`/movie-details/${id}`]);
  }

}
