import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { User } from '../../../models/users.model';
import { Router, RouterModule } from '@angular/router';
import MembersCardComponent from '../members-card/members-card.component';
@Component({
 selector: 'app-members-list',
 standalone: true,
 template: `
  <ul>
   @for( item of users; track $index){
   <li role="none" (click)="loadInfo()">
    <app-members-card [item]="item" />
   </li>
   }
  </ul>
 `,
 styles: ``,
 imports: [RouterModule, MembersCardComponent],
})
export default class MembersListComponent implements OnInit {
 service = inject(UsersService);
 router = inject(Router);
 users: User[] = [];

 ngOnInit(): void {
  this.service.getAll().subscribe((data) => {
   this.users = data;
  });
 }

 loadInfo() {
  this.router.navigate(['info']);
 }
}
