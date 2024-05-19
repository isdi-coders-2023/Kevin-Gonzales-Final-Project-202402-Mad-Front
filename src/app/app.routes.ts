import { Routes } from '@angular/router';
// import { loggedGuard } from './guards/logged.guard';

export const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'home' },
 {
  path: 'home',
  title: 'Home',
  loadComponent: () => import('./components/home/home.component'),
 },
 {
  path: 'register',
  title: 'Register',
  loadComponent: () => import('./components/core/register/register.component'),
 },
 {
  path: 'clubs',
  title: 'Clubs',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/clubs/clubs.component'),
 },
 {
  path: 'clubs/:id',
  title: 'Info Club',
  loadComponent: () =>
   import('./components/clubs/clubs-info/clubs-info.component'),
 },
 {
  path: 'members',
  title: 'Members',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/members/members.component'),
 },
 {
  path: 'members/:id',
  title: 'Info Member',
  loadComponent: () =>
   import('./components/members/members-info/members-info.component'),
 },
 {
  path: 'validations',
  title: 'Validations',
  loadComponent: () => import('./components/validations/validations.component'),
 },
 {
  path: 'validations/:id',
  title: 'Info Validation',
  loadComponent: () =>
   import(
    './components/validations/validations-info/validations-info.component'
   ),
 },
 {
  path: 'shop',
  title: 'Shop',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/shop/shop.component'),
 },
 {
  path: 'myprofile',
  title: 'My Profile',
  loadComponent: () => import('./components/my-profile/my-profile.component'),
 },
 { path: '**', redirectTo: 'home' },
];
