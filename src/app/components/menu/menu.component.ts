import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentMenuItem:number;
  constructor() { }

  ngOnInit(): void {
  
  }
  setCurrentMenu(menuItem:number){
    this.currentMenuItem = menuItem;
  }

  getCurrentMenuClass(menuItem:number){
    if(menuItem ==this.currentMenuItem){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }


}
