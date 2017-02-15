import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `
  <h1>{{name}}</h1>

  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region</i></p>
  <br />

  <fieldset>
    <label>Name: <input [(ngModel)]="name"></label>
  </fieldset>

  <label><input type="checkbox" [(ngModel)]="hideAdress"> Hide Address</label>

  <div [hidden]="hideAdress" >
    <fieldset>
      <label>Street: <input [(ngModel)]="street"></label>
    </fieldset>
    <fieldset>
      <label>City: <input [(ngModel)]="city"></label>
    </fieldset>
    <fieldset>
      <label>Region: </label>
      <select [(ngModel)]="region">
        <option>North</option>
        <option>East</option>
        <option>South</option>
        <option>West</option>
      </select>
    </fieldset>
  </div>
  `,
})

export class AppComponent {
  name = 'Wu Joe';
  street = "Baker Street";
  city = "London";
  region = "South";
  hideAdress = false;
}