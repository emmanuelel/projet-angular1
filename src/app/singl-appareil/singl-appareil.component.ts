import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/ appareil.service';

@Component({
  selector: 'app-singl-appareil',
  templateUrl: './singl-appareil.component.html',
  styleUrls: ['./singl-appareil.component.scss']
})
export class SinglAppareilComponent implements OnInit {

    name : string | undefined = "Appareil " ;
    status : string | undefined = "Statut" ;
  constructor(private appareilService : AppareilService, private route : ActivatedRoute) { }

  ngOnInit(): void {
 const id = this.route.snapshot.params['id'];
 this.name = this.appareilService.getAppareilById(+id)?.name;
 this.status = this.appareilService.getAppareilById(+id)?.status;

  }

}
