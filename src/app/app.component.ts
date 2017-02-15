import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} is in the {{region}} region</i></p>
  <br />

  <fieldset>
    <label>Name: </label><br/>
    <input [value]="name"><br/> <!-- One Way Binding -->

    <!-- Two Different Approach Doing Two Way Binding -->
    <input #namebox [value]="name" (input)="name=namebox.value"><br/>
    <input [value]="name" (input)="name=$event.target.value"><br/>
    
    <input [value]="name" (keyup)="name=$event.target.value"><br/> <!-- Two Way Binding -->

    <!-- Two Way Binding after pressing the ENTER ONLY-->
    <input [value]="name" (keyup.enter)="name=$event.target.value"><br/>

    <!-- Two Way Binding after pressing the ENTER OR LOST FOCUS-->
    <input [value]="name"
          (keyup.enter)="name=$event.target.value"
          (blur)="name=$event.target.value"
    ><br/>

    <input [(ngModel)]="name"><br/> <!-- Same As Line 13 & 14 -->
    <input [ngModel]="name" (ngModelChange)="name=$event"><br/> <!-- Two Way Binding -->
  </fieldset>

  <!-- Two Different Approach Doing The Same -->
  <button (click)="addressClick()">Show/Hide Address</button>
  <label><input type="checkbox" [(ngModel)]="hideAdress"> Hide Address</label>

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