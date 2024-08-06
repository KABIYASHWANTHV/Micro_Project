import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from './model/Bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  url:string;
  bikeArr : Bike[];
  bike:Bike;
  constructor(private http : HttpClient) 
  {
    this.url="http://localhost:3004/bikes";
    this.bikeArr = [];
    this.bike=new Bike();
  }
  insertBike(bike : Bike)
  {
    this.http.post<Bike>(this.url,bike).subscribe();
    return "Bike Details Added";
  }
  updateBike(bike : Bike)
  {
    this.http.put<Bike>(this.url+"/"+bike.id,bike).subscribe();
    return "Bike Details Updated";
  }
  deleteBike(bikeId : number)
  {
    this.http.delete<Bike>(this.url+"/"+bikeId).subscribe();
    return "Bike Details Deleted";
  }
  findAllBike()
   {
    this.http.get<Bike[]>(this.url).subscribe(data => this.bikeArr = data);
    return this.bikeArr; 
  }
  findBike(bikeId : number)
  {
    this.http.get<Bike>(this.url +"/"+bikeId).subscribe(data => this.bike = data);
    return this.bike;
  }
}
