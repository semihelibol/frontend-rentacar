import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) { }
  
  getCarDetails(): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);    
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandid="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorid="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  
  getCarDetailsById(id:number):Observable<DataResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbyid?id="+id
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath);
  }
}