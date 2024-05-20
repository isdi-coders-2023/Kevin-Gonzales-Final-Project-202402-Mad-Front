import { Component, Input, inject } from '@angular/core';
import {
 FormGroup,
 FormBuilder,
 Validators,
 ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../../models/clubs.model';
import { ClubsService } from '../../../services/clubs/clubs.service';
import { StateService } from '../../../services/state/state.service';
import ClubsInfoComponent from '../clubs-info/clubs-info.component';

@Component({
 selector: 'app-clubs-delete',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div id="deleteCard">
   <h2>delete club</h2>
   <p>please, confirm writting "sudo delete" for continue</p>
   <form [formGroup]="formDelete" (ngSubmit)="onSubmit()">
    <div id="delInp">
     <input type="text" placeholder="sudo delete" formControlName="confirm1" />
     <input type="text" placeholder="sudo delete" formControlName="confirm2" />
    </div>
    <button (click)="onCancel()">❌</button>
    <button type="submit" [disabled]="formDelete.invalid">✅</button>
   </form>
  </div>
 `,
 styles: ``,
})
export class ClubsDeleteComponent {
 @Input({ required: true })
 club!: Club;

 main = inject(ClubsInfoComponent);
 state = inject(StateService);
 activateRoute = inject(ActivatedRoute);
 repo = inject(ClubsService);
 router = inject(Router);
 formDelete: FormGroup;

 constructor(private fb: FormBuilder) {
  this.formDelete = this.fb.group(
   {
    confirm1: ['', Validators.required],
    confirm2: ['', Validators.required],
   },
   { asyncValidators: this.isSudoDelete }
  );
 }

 async isSudoDelete(
  formDelete: FormGroup
 ): Promise<{ [key: string]: boolean } | null> {
  if (formDelete.get('confirm1')?.value === 'sudo delete') {
   return null;
  }
  return { isNotSudoDelete: true };
 }

 onSubmit() {
  const id = this.club.id;
  this.repo.delete(id).subscribe(() => {
   this.router.navigate(['/clubs']);
  });
 }

 onCancel() {
  this.main.funcOptions = 'view';
 }
}
