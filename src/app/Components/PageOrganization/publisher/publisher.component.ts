import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherService } from '../../../Services/Publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publicador: any = {};
  constructor( private activatedRoute: ActivatedRoute, publisherService: PublisherService) {
    this.activatedRoute.params.subscribe(params => {
    this.publicador = publisherService.getPublicador( params['id'] );
 });
}
  ngOnInit() {
  }
}
