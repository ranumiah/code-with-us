import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `
  <h1>{{name}}</h1>
  <fieldset>
    <img src={{image}}>
    <img [src]="image">
  </fieldset>
  <label [style.color]="colour">Favourite Colour</label>
  `,
})
export class AppComponent {
  name = 'Alex Smith';
  image = 'favicon.ico';
  colour = 'red';
}
