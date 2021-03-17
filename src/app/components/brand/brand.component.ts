import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand :Brand;
  dataLoaded = false;
  allBrand=true;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    });
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
    this.allBrand=false;
  }

  setAllBrand(){
    this.allBrand=true;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand ==this.currentBrand && !this.allBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  
  getAllBrandClass(){
    if(this.allBrand){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
  }  
}
