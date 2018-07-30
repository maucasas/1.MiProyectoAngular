import { Component, OnInit, Input } from '@angular/core';
import { IPublicador } from '../../../Services/Publisher.service';

@Component({
  selector: 'app-card-publisher',
  templateUrl: './card-publisher.component.html',
  styleUrls: ['./card-publisher.component.css']
})
export class CardPublisherComponent implements OnInit {
@Input() publicador: IPublicador;
mostrar = false;
informe = false;
  constructor() { }

  ngOnInit() {
  }

}
