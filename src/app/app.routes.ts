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
  path: 'members',
  title: 'Members',
  // canActivate: [loggedGuard],
  loadComponent: () => import('./components/members/members.component'),
 },
 {
  path: 'info/:id',
  title: 'Info Member',
  loadComponent: () =>
   import('./components/members/members-info/members-info.component'),
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
