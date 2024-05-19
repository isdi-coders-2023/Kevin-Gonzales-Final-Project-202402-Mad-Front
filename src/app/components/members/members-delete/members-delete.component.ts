import { Component, Input, inject } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 ReactiveFormsModule,
 Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../services/state/state.service';
import { User } from '../../../models/users.model';
import { UsersService } from '../../../services/users/users.service';
import MembersInfoComponent from '../members-info/members-info.component';

@Component({
 selector: 'app-members-delete',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div id="deleteCard">
   <h2>delete user</h2>
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
export class MembersDeleteComponent {
 @Input({ required: true })
 user!: User;

 main = inject(MembersInfoComponent);
 state = inject(StateService);
 activateRoute = inject(ActivatedRoute);
 repo = inject(UsersService);
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
  const id = this.user.id;
  this.repo.delete(id).subscribe(() => {
   this.router.navigate(['/members']);
  });
 }

 onCancel() {
  this.main.funcOptions = 'View';
 }
}
