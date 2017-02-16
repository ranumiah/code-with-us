import { Component, Input } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',  // to use me, do this in html <customer-detail>
  templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent {
  @Input() // Must Explicity allow customer object to communicate with other component
  customer: Customer;

  showAddress = true;

  counties = ['Northumberland', 'Lincolnshire', 'Hampshire', 'Shropshire', 'Greater London'];
  regions = ['North', 'East', 'South', 'West', 'Capital'];
}