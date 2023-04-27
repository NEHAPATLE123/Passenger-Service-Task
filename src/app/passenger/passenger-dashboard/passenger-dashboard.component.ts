import { Component, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passengerArray: Array<Ipassanger> = [];
  chekedInCount! : number;

  constructor(private _passangerService : PassengerService) { }

  ngOnInit(): void {
    this.passengerArray = this._passangerService.getAllPassengers();
    // console.log(this._passangerService.passengerArray)
    this.chekedInCount = this.passengerArray.filter(pass => pass.checkedIn).length
    
}

onRemoveUpdate(eve:any){
  this.chekedInCount =  this.passengerArray.filter(pass => pass.checkedIn).length
}

}