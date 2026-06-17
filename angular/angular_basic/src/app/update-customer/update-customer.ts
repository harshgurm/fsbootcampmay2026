import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer-service';
import { CustomerInfo } from '../interfaces/customer-info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  imports: [FormsModule],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer {

  route = inject(ActivatedRoute);
  customerService = inject(CustomerService);
  customer: CustomerInfo = {
    customer_id: 0,
    customer_name: '',
    customer_email: '',
    age: 0
  };
  customerId!: number;

  constructor() {
    this.customerId = parseInt(this.route.snapshot.params['id']);
    if (this.customerId) {
       this.customerService.getCustomerById(this.customerId).subscribe((data: CustomerInfo[]) => {
        this.customer = data[0];
      });
    }
  }

  updateCustomer(customer: CustomerInfo) {
    this.customerService.updateCustomer(this.customerId, customer).subscribe((data: any) => {
      console.log('Customer updated successfully', data);
    });
  }
}
