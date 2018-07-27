import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPublicador, PublisherService } from '../../../Services/Publisher.service';
import { Identifiers} from '../../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit {
  public encontrados: IPublicador [];
  mostrar = false;
  word;
  constructor( private activatedRoute: ActivatedRoute, private publisherService: PublisherService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.word = params['word'];
      this.encontrados = this.publisherService.busquedasPublicador(params['word']);
      if (this.encontrados.length > 0 ) {
        console.log( 'metodo init busquedas con resultados', this.encontrados);
        } else { console.log('la busqueda sin resultados'); }
     });
  }

  verPublicador(cod: Identifiers) {

  }
}
