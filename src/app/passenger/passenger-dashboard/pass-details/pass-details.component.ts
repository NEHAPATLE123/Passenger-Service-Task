import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss']
})
export class PassDetailsComponent implements OnInit {

@Input() passObj! : Ipassanger;
@Output() emitPassInfo: EventEmitter<Ipassanger> = new EventEmitter<Ipassanger>()

isEditabel: boolean = false;

  constructor(private _passengerService: PassengerService) { }

  ngOnInit(): void {
  }
  onDone(pname: string){
    console.log(pname);
    this.isEditabel = !this.isEditabel;
    this._passengerService.updatePassangerFullname(this.passObj.id, pname);
 
  }

  onRemove(){
    this._passengerService.removePassenger(this.passObj.id, this.passObj.fullname);
    this.emitPassInfo.emit(this.passObj)
    ;
  }
}
