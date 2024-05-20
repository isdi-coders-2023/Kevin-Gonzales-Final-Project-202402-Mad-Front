import { Component, OnDestroy, inject } from '@angular/core';
import { Club } from '../../../models/clubs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StateService } from '../../../services/state/state.service';
import { ClubsEditComponent } from '../clubs-edit/clubs-edit.component';
import { ClubsDeleteComponent } from '../clubs-delete/clubs-delete.component';

@Component({
 selector: 'app-clubs-info',
 standalone: true,
 template: `
  @switch (funcOptions) {@case ('view') {
  <div id="clubCard">
   <div id="clubLogo">
    @if (club.logo!==null) {
    <img src="{{ club.logo.secureUrl }}" alt="{{ club.name }} logo" />
    } @else {
    <img src="../assets/default_logo.png" alt="{{ club.name }} logo" />
    }
   </div>
   <div id="clubData">
    <h2>{{ club.name }}</h2>
    <p>{{ club.country }}</p>
    <p>{{ club.founded }}</p>
    <p>{{ club.description }}</p>
   </div>
  </div>
  <div id="btnInfoClub">
   <button (click)="onBack()">Back</button>
   @if (state.state.currenUser?.role === 'admin') {
   <button (click)="onEdit()">✏️</button>
   <button (click)="onDelete()">⛔️</button>
   }
  </div>
  } @case ('edit') {
  <app-clubs-edit [club]="club" />
  } @case ('delete') {
  <app-clubs-delete [club]="club" />
  } }
 `,
 styleUrl: './clubs-info.component.css',
 imports: [ClubsEditComponent, ClubsDeleteComponent],
})
export default class ClubsInfoComponent implements OnDestroy {
 funcOptions: 'view' | 'edit' | 'delete' = 'view';
 activatedRoute = inject(ActivatedRoute);
 state: StateService = inject(StateService);
 subscription: Subscription;
 club!: Club;
 router = inject(Router);

 constructor() {
  this.subscription = this.activatedRoute.params.subscribe((params) => {
   this.state.getState().subscribe((state) => {
    try {
     this.club = state.clubs.find(
      (club: Club) => club.id === params['id']
     ) as Club;
    } catch (e) {
     new Error('Club not found');
    }
   });
  });
 }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }

 onBack(): void {
  this.router.navigate(['/clubs']);
 }

 onEdit(): void {
  this.funcOptions = 'edit';
 }

 onDelete(): void {
  this.funcOptions = 'delete';
 }
}
