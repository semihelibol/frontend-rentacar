import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:CarDto;
  carImages:CarImage[]=[];
  dataLoaded = false;  
  imagePath:string="https://localhost:44356/images/";  
  
  constructor(private carImageService:CarImageService,private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarImagesByCarId(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response=>{
       this.car = response.data
    })

    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
    this.dataLoaded = true;
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
