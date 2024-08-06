import { Component } from '@angular/core';
import { Bike } from './model/Bike';
import { BikeService } from './bike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Bike';
  bike:Bike;
  result:string;
  bikeArr : Bike[];
  flag : boolean;
  constructor(private service : BikeService)
  {
    this.bike=new Bike();
    this.result="";
    this.bikeArr = [];
    this.flag = false;
  }
  insertBike(data : any)
  {
    this.bike.id=data.bikeId;
    this.bike.bikeName=data.bikeName;
    this.bike.bikePrice=data.bikePrice;
    this.bike.bikeColor=data.bikeColor;
    this.result = this.service.insertBike(this.bike);
  }
  updateBike(data : any)
  {
    this.bike.id=data.bikeId;
    this.bike.bikeName=data.bikeName;
    this.bike.bikePrice=data.bikePrice;
    this.bike.bikeColor=data.bikeColor;
    this.result = this.service.updateBike(this.bike);
  }
  deleteBike(data : any)
  {
    this.result=this.service.deleteBike(data.bikeId);
  }
  findAllBike()
  {
    this.bikeArr = this.service.findAllBike();
    this.flag = true;
  }
  findBike(data : any)
  {
    this.bike = this.service.findBike(data.bikeId);
    this.result=this.bike.id + " " + this.bike.bikeName + " " + this.bike.bikePrice + " " + this.bike.bikeColor;
  }
}
