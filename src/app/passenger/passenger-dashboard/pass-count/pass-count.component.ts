import { Component, OnInit,Input} from '@angular/core';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
@Input() totalPassengerCount!: number 
@Input() totalChekedInCount!: number

  constructor(private _passengerServie: PassengerService) { }

  ngOnInit(): void {
  this.totalChekedInCount = this._passengerServie.checkedInPassengerCount()
  }

}
  