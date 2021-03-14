import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/customerDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) { }
  
  getCustomers(): Observable<ListResponseModel<CustomerDto>> {
    let newPath = this.apiUrl + "customers/getcustomerdetails"
    return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath);
  }
  
}