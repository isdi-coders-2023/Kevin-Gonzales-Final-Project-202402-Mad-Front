import { Component, Input, OnInit, inject } from '@angular/core';
import { Club, ClubUpdateDto } from '../../../models/clubs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StateService } from '../../../services/state/state.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClubsService } from '../../../services/clubs/clubs.service';
import { Location } from '@angular/common';

@Component({
 selector: 'app-validations-info',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div id="validatorCard">
   <h2>validation {{ club.name }}</h2>
   <div>
    <form [formGroup]="formValidator" (ngSubmit)="(onSubmit)">
     <div id="dataInput">
      <div id="logoInput">
       @if (club.logo!==null) {
       <img src="{{ club.logo.secureUrl }}" alt="{{ club.name }} logo" />
       } @else {
       <img src="../assets/default_logo.png" alt="{{ club.name }} logo" />
       }
       <input type="file" placeholder="update logo" formControlName="logo" />
      </div>
      <div id="textInput">
       <input
        type="text"
        placeholder="{{ club.name }}"
        formControlName="name"
       />
       <input
        type="text"
        placeholder="{{ club.country }}"
        formControlName="country"
       />

       <input
        type="number"
        placeholder="{{ club.founded }}"
        formControlName="founded"
       />
       <input
        type="text"
        placeholder="add description"
        formControlName="description"
       />
      </div>
     </div>
     <button role="none" (click)="goBack()">🔙</button>
     <button (click)="onSubmit()">✅</button>
    </form>
   </div>
  </div>
 `,
 styleUrls: ['./validations-info.component.css'],
})
export default class ValidationsInfoComponent implements OnInit {
 @Input({ required: true }) club!: Club;
 activatedRoute = inject(ActivatedRoute);
 state = inject(StateService);
 repo = inject(ClubsService);
 subscription: Subscription;
 fb = inject(FormBuilder);
 formValidator!: FormGroup;
 route = inject(Router);

 constructor(private location: Location) {
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

 ngOnInit(): void {
  this.formValidator = this.fb.group({
   logo: [''],
   name: [''],
   country: [''],
   founded: [''],
   description: [''],
  });
 }

 onSubmit() {
  const validateClub: ClubUpdateDto = {
   logo:
    this.formValidator.value.logo === ''
     ? this.club.logo
     : this.formValidator.value.logo,
   name:
    this.formValidator.value.name === ''
     ? this.club.name
     : this.formValidator.value.name,
   country:
    this.formValidator.value.country === ''
     ? this.club.country
     : this.formValidator.value.country,
   founded:
    this.formValidator.value.founded === ''
     ? this.club.founded
     : this.formValidator.value.founded,
   description: this.formValidator.value.description,
   state: 'validated',
  };

  const id = this.club.id;

  return this.repo.updateClub(id, validateClub).subscribe(() => {
   this.route.navigate(['clubs']);
  });
 }

 goBack() {
  this.location.back();
 }
}
