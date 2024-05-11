import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { MyprofileEditComponent } from './myprofile-edit/myprofile-edit.component';
import { MyprofileViewComponent } from './myprofile-view/myprofile-view.component';
import { MyprofileDeleteComponent } from './myprofile-delete/myprofile-delete.component';

type ProfileState = 'view' | 'edit' | 'delete';

export type State = {
 profileState: ProfileState;
};

const initialState: State = {
 profileState: 'view',
};

@Component({
 selector: 'app-my-profile',
 standalone: true,
 template: `
  @switch (state.profileState) { @case ('view') {
  <app-myprofile-view />
  } @case ('edit') {
  <app-myprofile-edit />
  } @case ('delete') {
  <app-myprofile-delete />
  }}
 `,
 styles: ``,
 imports: [
  JsonPipe,
  RouterModule,
  MyprofileEditComponent,
  MyprofileViewComponent,
  MyprofileDeleteComponent,
 ],
})
export default class MyProfileComponent {
 public state$ = new BehaviorSubject<State>(initialState);

 getState() {
  return this.state$.asObservable();
 }

 get state() {
  return this.state$.value;
 }

 setProfileState(profileState: ProfileState) {
  this.state$.next({ ...this.state$.value, profileState });
 }
}
