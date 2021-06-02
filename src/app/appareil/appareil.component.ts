import { Component, Input , OnInit } from '@angular/core';
import { AppareilService } from '../services/ appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl:'./appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // @ts-ignore
  @Input() appareilName: string ;
  // @ts-ignore
  @Input() appareilStatus: string ;
  // @ts-ignore
  @Input() indexOfAppareil: number ;
  // @ts-ignore
  @Input() id : number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    console.log('ng init component po');
  }
  getStatus(): string {
    return this.appareilStatus;
 }
 // @ts-ignore
  // tslint:disable-next-line:typedef

  getColor() {
    if (this.appareilStatus === 'allumer')
    {
      return 'green';
    }
    else if (this.appareilStatus === 'eteint')
    {
      return 'red';
    }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  offSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
