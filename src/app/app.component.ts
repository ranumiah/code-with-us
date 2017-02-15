import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {
  name = 'Angular X';
}
