import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherService, IPublicador } from '../../../Services/Publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publicador: IPublicador;
  constructor( private activatedRoute: ActivatedRoute, publisherService: PublisherService) {
    this.activatedRoute.params.subscribe(params => {
      this.publicador = publisherService.getPublicador( params.cod );
    });
}
  ngOnInit() {
  }
}
