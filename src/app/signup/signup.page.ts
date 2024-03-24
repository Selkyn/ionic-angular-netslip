import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { LoadingController } from '@ionic/angular/standalone';
import { AuthenticationService } from '../provider/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref, ReactiveFormsModule]
})
export class SignupPage implements OnInit {
  credentials: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public authService: AuthenticationService,
    public router: Router,
    public alertController: AlertController
  ) { }

  // get email() {
  //   return this.credentials.get('email');
  // }

  // get password() {
  //   return this.credentials.get('password');
  // }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    
  }

  async register() {
    const loading = await this.loadingController.create(); //on creer un loading le temps de l enregistrement
    await loading.present();

    const user = await this.authService.register({
      email: this.credentials.value.email,
      password: this.credentials.value.password
    });
    // const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/movies', {replaceUrl: true});
    } else {
      this.showAlert('Echec de l\'enregistrement', 'Veuillez réessayer')
    }
  }


async login() {
  const loading = await this.loadingController.create();
  await loading.present();

  const user = await this.authService.login({
    email: this.credentials.value.email,
    password: this.credentials.value.password
  });
  // const user = await this.authService.login(this.credentials.value);
  await loading.dismiss();

  if (user) {
    this.router.navigateByUrl('/movies', {replaceUrl: true});
  } else {
    this.showAlert('Echec de d\'authentification', 'Veuillez réessayer')
  }
}

async showAlert(header, message) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}
}

  



// this.regForm = this.formBuilder.group({
    //   username: ['', [Validators.required]],
    //   email: ['', [
    //     Validators.required,
    //     Validators.email,
    //     Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    //   ]],
    //   password: ['',
    //     Validators.required]

    // })


// get errorControl() {
  //   return this.regForm?.controls;
  // }

  // async signUp() {
  //   const loading = await this.loadingController.create();
  //   await loading.present();
  //   if (this.regForm?.valid) {
  //     const user = await this.authService.register(username, email, password)
  //   }
  // }
