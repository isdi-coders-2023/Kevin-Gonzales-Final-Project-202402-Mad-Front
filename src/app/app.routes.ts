import { Routes } from '@angular/router';
// import { loggedGuard } from './guards/logged.guard';

export const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'home' },
 {
  path: 'home',
  loadComponent: () => import('./components/home/home.component'),
 },
 {
  path: 'register',
  loadComponent: () => import('./components/register/register.component'),
 },
 {
  path: 'clubs',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/login/login.component'),
 },
 {
  path: 'members',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/members/members.component'),
 },
 {
  path: 'shop',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/shop/shop.component'),
 },
 {
  path: 'myProfile',
  loadComponent: () => import('./components/my-profile/my-profile.component'),
 },
 { path: '**', redirectTo: 'home' },
];
