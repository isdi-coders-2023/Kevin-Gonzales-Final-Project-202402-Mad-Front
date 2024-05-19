import { Component } from '@angular/core';

@Component({
 selector: 'app-footer',
 standalone: true,
 imports: [],
 template: `
  <footer>
   <h2>by Kev</h2>
  </footer>
 `,
 styles: `

footer {
      background-image: url('/assets/EkA5.gif'); 
      background-size: cover;
      background-position: center;
      height: 20vh;
      display: flex; 
      justify-content:center;
      align-items: center; 
      text-align: center; 
      color: white; 
    }
  `,
})
export class FooterComponent {}
