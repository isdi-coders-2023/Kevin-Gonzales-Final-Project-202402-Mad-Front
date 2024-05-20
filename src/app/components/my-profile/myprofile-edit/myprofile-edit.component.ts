import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
 Component,
 ElementRef,
 Input,
 OnInit,
 ViewChild,
 inject,
} from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import MyProfileComponent from '../my-profile.component';
import { ActivatedRoute } from '@angular/router';
import { User, UserUpdateDto } from '../../../models/users.model';
import { StateService } from '../../../services/state/state.service';

@Component({
 selector: 'app-myprofile-edit',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div id="editCard">
   <h2>edit profile</h2>
   <div>
    <form [formGroup]="formEdit" (ngSubmit)="onSubmit()">
     <div id="editData">
      <div id="editAvatar">
       @if(user.avatar !== null){
       <img
        src="{{ user.avatar.secureUrl }}"
        alt="{{ user.username }} avatar"
       />
       } @else{
       <img
        src="../assets/Default_Avatar.png"
        alt="{{ user.username }} avatar"
       />
       }
       <input
        id="updateAvatar"
        type="file"
        placeholder="update your avatar"
        formControlName="avatar"
        #avatar
        (change)="onFileChange()"
       />
      </div>
      <div id="editInfo">
       <input
        type="text"
        placeholder="{{ user.country }}"
        formControlName="country"
       />
      </div>
     </div>
     <button (click)="setViewState()">❌</button>
     <button type="submit" [disabled]="formEdit.invalid">✅</button>
    </form>
   </div>
  </div>
 `,
 styleUrls: ['myprofile-edit.component.css'],
})
export default class MyprofileEditComponent implements OnInit {
 @Input({
  required: true,
 })
 user!: User;
 activatedRoute = inject(ActivatedRoute);
 repo = inject(UsersService);
 state = inject(StateService);
 fb = inject(FormBuilder);
 formEdit!: FormGroup;
 main = inject(MyProfileComponent);
 @ViewChild('avatar') avatar!: ElementRef;
 imageUrl: string | null = null;

 constructor() {
  this.state.getState().subscribe((state) => {
   if (state.currenUser) this.user = state.currenUser;
  });
 }

 ngOnInit(): void {
  this.formEdit = this.fb.group({
   avatar: null,
   country: [''],
  });
 }
 onFileChange() {
  const htmlElement: HTMLInputElement = this.avatar.nativeElement;
  const file = htmlElement.files![0];
  const reader = new FileReader();
  reader.onload = () => {
   this.imageUrl = reader.result as string;
  };
  reader.readAsDataURL(file);
  this.formEdit.patchValue({ avatar: file });
 }

 onSubmit() {
  const fd = new FormData();
  fd.append('avatar', this.formEdit.value.avatar);
  fd.append('country', this.formEdit.value.country);

  const id = this.user.id;

  return this.repo.update(id, fd as UserUpdateDto).subscribe(() => {
   this.setViewState();
  });
 }

 setViewState() {
  this.main.funcOption = 'view';
 }
}
