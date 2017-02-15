import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `
  <h1>{{name}}</h1>

  <p><i>{{name}} is in the {{region}} region</i></p>

  <div>
    <fieldset>
      <img src={{image}}>
      <!-- img is an Element of HTML and src is the source of the element -->
      <img [src]="image">
    </fieldset>
  </div>

  <div>
    <label [style.color]="colour">Favourite Colour</label>
    <button (click)="clicked()">Toggle Colour</button>
<!--
    <select #selector (change)="colourChange(selector.value)"> ==> This is a Template Variable that refers to itself
    <select (change)="colourChange($event.target.value)"> ==> $event is a DOM event and this does the same as above
-->
    <select (change)="colourChange($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>yellow</option>
    </select>
  </div>

  <br>
  <br>

  <button (click)="addressClick()">Show/Hide Address</button>
  <div [hidden]="hideAdress" >
    <label>Region: </label>
    <select (change)="regionChange($event.target.value)">
      <option>North</option>
      <option>East</option>
      <option>South</option>
      <option>West</option>
    </select>
    <fieldset>
      <label>Street: </label>{{street}}
      <br>
      <label>City: {{city}}</label>
    </fieldset>
  </div>
  `,
})

export class AppComponent {
  name = 'Wu Joe';
  image = 'favicon.ico';
  colour = 'red';
  street = "Baker Street";
  city = "London";
  region = "South";
  hideAdress = false;

  clicked() {
    this.colour = this.colour === 'red' ? 'blue' : 'red';
  }

  colourChange(colour: string) {
    this.colour = colour;
  }

  addressClick() {
    this.hideAdress = !this.hideAdress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}