import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPublicador } from '../../../Services/Publisher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-publisher',
  templateUrl: './card-publisher.component.html',
  styleUrls: ['./card-publisher.component.css']
})
export class CardPublisherComponent implements OnInit {
@Input() publicador: IPublicador;
@Input() codigo: string;

@Output() publicadorSeleccionado: EventEmitter<string>;
mostrar = false;
informe = false;
 constructor( private router: Router) {
   this.publicadorSeleccionado = new EventEmitter;
  }

  ngOnInit() {
  }
  verPublicador() {
// this.router.navigate(['/publisher', this.index]);
    this.publicadorSeleccionado.emit( this.codigo );
    /// evento publicadorseleccionado envia el para.codigo medio de emit y lo escuchara el padre groups.
  }

}
