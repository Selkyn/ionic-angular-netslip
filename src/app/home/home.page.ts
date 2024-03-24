import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AuthenticationService } from '../provider/authentication.service';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonicModule, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule],
})
export class HomePage {
  constructor(private authService: AuthenticationService, public router: Router) {}

  async logout() {
    await this.authService.logout()
  }
}
