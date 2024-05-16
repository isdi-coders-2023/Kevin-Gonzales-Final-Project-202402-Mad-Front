import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
 selector: 'app-shop',
 standalone: true,
 imports: [],
 template: `
  <div class="shopComponent">
   <h2>FAN'S WORLD SHOP</h2>
   <p>told you it was coming soon.</p>
   <button role="none" (click)="goBack()">go back!</button>
  </div>
 `,
 styles: `
 .shopComponent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-block:2rem;
  p{
    font-size: 2rem;
  }
}

 h2{
  font-size: 4rem;
  color:black;
 -webkit-text-stroke: #eb0404 3px;
 }

 @media (prefers-color-scheme: dark) {
 h2 {
  color: white;
 }
}
button {
  font-size:2rem;
  border: none;
  border-radius: 20px;
  width: 150px;
}
 `,
})
export default class ShopComponent {
 constructor(private location: Location) {}
 goBack() {
  this.location.back();
 }
}
