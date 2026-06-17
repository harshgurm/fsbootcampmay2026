import { Component, effect, inject } from '@angular/core';
import { CustomerInfo } from '../interfaces/customer-info';
import { CustomerService } from '../services/customer-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  customers$!: Observable<CustomerInfo[]>;
  customerService = inject(CustomerService);

  constructor() {
    // this.customerService.getCustomers().subscribe((data) => {
    //   this.customers = data;
    //   console.log(this.customers);
    // });

    //Another way of getting the data
    // Using subscribe with next and error handlers

    // this.customerService.getCustomers().subscribe({
    //   next: (data) => {
    //     this.customers = data;
    //     console.log(this.customers);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });

    //Best way of getting the data using async pipe in the template
    effect(() => {
      this.customers$ = this.customerService.getCustomers();
      console.log(this.customers$);
    });

  }
  
  deleteCustomer(id: number | undefined) {
    if(id){
      this.customerService.deleteCustomerById(id).subscribe({
        next: (data) => {
          // Refresh the customers list after deletion
          console.log(data);
          this.customers$ = this.customerService.getCustomers();
          console.log(this.customers$);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
