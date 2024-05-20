import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Club, ClubUpdateDto } from '../../../models/clubs.model';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../../services/state/state.service';
import ClubsInfoComponent from '../clubs-info/clubs-info.component';
import { ClubsService } from '../../../services/clubs/clubs.service';

@Component({
 selector: 'app-clubs-edit',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div>
   <h2>edit club</h2>
   <div>
    <form [formGroup]="formEditClub" (ngSubmit)="onSubmit()">
     <div>
      <div id="editLogo">
       @if (club.logo !== null) {
       <img src="{{ club.logo.secureUrl }}" alt="{{ club.name }} logo" />
       } @else {
       <img src="../assets/default_logo.png" alt="{{ club.name }} logo" />}
       <input id="updateLogo" type="file" placeholder="update club logo" />
      </div>
      <div id="editInfo">
       <input type="text" placeholder="{{ club.name }}" />
       <input type="text" placeholder="{{ club.country }}" />
       <input type="text" placeholder="{{ club.founded }}" />
       <textarea placeholder="{{ club.description }}"></textarea>
      </div>
     </div>
     <div id="editBtns">
      <button (click)="setViewState()">❌</button>
      <button type="submit">✅</button>
     </div>
    </form>
   </div>
  </div>
 `,
 styles: `
 img{
  width: 200px;
  height: 200px;
 
 }
 `,
})
export class ClubsEditComponent {
 @Input({ required: true })
 club!: Club;
 activeRoute = inject(ActivatedRoute);
 repo = inject(ClubsService);
 state = inject(StateService);
 fb = inject(FormBuilder);
 formEditClub: FormGroup;
 main = inject(ClubsInfoComponent);

 constructor() {
  this.formEditClub = this.fb.group({
   logo: null,
   name: [''],
   country: [''],
   founded: [''],
   description: [''],
  });
 }

 onSubmit() {
  const editClub: ClubUpdateDto = {
   logo:
    this.formEditClub.value.logo === null
     ? this.club.logo
     : this.formEditClub.value.logo,
   name:
    this.formEditClub.value.name === ''
     ? this.club.name
     : this.formEditClub.value.name,
   country:
    this.formEditClub.value.country === ''
     ? this.club.country
     : this.formEditClub.value.country,
   founded:
    this.formEditClub.value.founded === ''
     ? this.club.founded
     : this.formEditClub.value.founded,
   description:
    this.formEditClub.value.description === ''
     ? this.club.description
     : this.formEditClub.value.description,
   state: this.club.state,
  };
  console.log('logo', editClub.logo);
  return this.repo.updateClub(this.club.id, editClub).subscribe(() => {
   this.setViewState();
  });
 }

 setViewState() {
  this.main.funcOptions = 'view';
 }
}
