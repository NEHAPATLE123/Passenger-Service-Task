import { Injectable } from '@angular/core';
import { Ipassanger } from '../models/passenger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private _snackBar: SnackbarService) { }

  passengerArray: Array<Ipassanger> = [
  {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
  }, 
  {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  }, 
  {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
  }, 
  {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
  }, 
  {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
  }
];

getAllPassengers(){
    return this.passengerArray;
}

updatePassangerFullname(id:number, updateName: string){
    this.passengerArray.forEach(pass => {
        if(pass.id === id){
            pass.fullname = updateName;
            this._snackBar.onOpenSnackBar(`The username is Updated to ${updateName}`)
        }
    })
}

removePassenger(id:number, name:string){
   let passIndex = this.passengerArray.findIndex(pass => pass.id === id);
    this.passengerArray.splice(passIndex, 1)
    this._snackBar.onOpenSnackBar(`${name} is removed from Passenger Data`)
    
   }
  

checkedInPassengerCount(){
    return this.passengerArray.filter(pass => pass.checkedIn).length;
}


}
