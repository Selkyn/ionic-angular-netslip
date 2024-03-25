import { Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate, AuthGuard} from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['my-profile']);
const redirectUnauthorizedInToLogin = () => redirectLoggedInTo(['signup']);

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard]
    // ...canActivate(redirectUnauthorizedInToLogin)
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'movies',
    loadComponent: () => import('./movies/movies.page').then( m => m.MoviesPage),
    // ...canActivate(redirectUnauthorizedInToLogin)
    canActivate: [AuthGuard]
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./my-profile/my-profile.page').then( m => m.MyProfilePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-details/:id',
    loadComponent: () => import('./movie-details/movie-details.page').then( m => m.MovieDetailsPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'photo',
    loadComponent: () => import('./photo/photo.page').then( m => m.PhotoPage)
  },
];
