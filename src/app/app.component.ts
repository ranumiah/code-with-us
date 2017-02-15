import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',  // to use me, do this in html <my-app>
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'John Smith',
    address: {
      street: '221A Baker Street',
      city: 'City of London',
      county: 'Greater London',
      region: 'Capital'
    }
  };
  hideAdress = false;
}