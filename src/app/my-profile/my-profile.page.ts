import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthenticationService } from '../provider/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MyProfilePage implements OnInit {

  constructor( private authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logout()
    this.router.navigateByUrl('/signup', {replaceUrl: true});
  }
}
