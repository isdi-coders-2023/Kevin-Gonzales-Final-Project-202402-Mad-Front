import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ClubsService } from '../../../services/clubs/clubs.service';
import { StateService } from '../../../services/state/state.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-clubs-add',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <form [formGroup]="AddClubForm" (ngSubmit)="onSubmit()">
   <input type="file" id="logo" name="logo" formControlName="logo" />
   <input
    type="text"
    id="name"
    name="name"
    placeholder="name"
    formControlName="logo"
   />
   <input
    type="number"
    id="founded"
    name="founded"
    placeholder="founded year"
    formControlName="founded"
   />
   <input
    type="text"
    id="country"
    name="country"
    placeholder="country"
    formControlName="country"
   />
   <button type="submit" [disabled]="AddClubForm.invalid">Submit</button>
  </form>
 `,
 styleUrl: './clubs-add.component.css',
})
export class ClubsAddComponent {
 router = inject(Router);
 repo = inject(ClubsService);
 state = inject(StateService);
 fb = inject(FormBuilder);
 AddClubForm!: FormGroup;

 constructor() {
  this.AddClubForm = this.fb.group({
   logo: [null],
   name: [''],
   founded: [''],
   country: [''],
  });
 }

 onSubmit() {
  const data = this.AddClubForm.value;
  this.repo.createClub(data).subscribe(() => {
   this.router.navigate(['/clubs']);
  });
 }
}
