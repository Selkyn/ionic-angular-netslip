import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    [importProvidersFrom(HttpClientModule)],
    importProvidersFrom(IonicModule.forRoot({})),
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "auth-netslip", "appId": "1:88407960754:web:53d5545edee2051030edab", "storageBucket": "auth-netslip.appspot.com", "apiKey": "AIzaSyB2BnEKM53zE98IdhWz8i9pv62LQdgwtF8", "authDomain": "auth-netslip.firebaseapp.com", "messagingSenderId": "88407960754", "measurementId": "G-Q022BC71MG" }))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
});
