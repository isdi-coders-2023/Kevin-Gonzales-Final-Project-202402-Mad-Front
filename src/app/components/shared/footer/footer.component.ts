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

  footer{
    height: 20%;
    background: "../../../../assets/footer.jpg";
  }

  h2{
    align-items: center;
  }
  `,
})
export class FooterComponent {}
