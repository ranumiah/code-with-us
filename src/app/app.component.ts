import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} is in the {{region}} region</i></p>
  <br />
  <button (click)="addressClick()">Show/Hide Address</button>
  <div [hidden]="hideAdress" >
    <fieldset>
      <label>Street: </label>{{street}}
    </fieldset>
    <fieldset>
      <label>City: {{city}}</label>
    </fieldset>
    <fieldset>
      <label>Region: </label>
      <select (change)="regionChange($event.target.value)">
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

  addressClick() {
    this.hideAdress = !this.hideAdress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}