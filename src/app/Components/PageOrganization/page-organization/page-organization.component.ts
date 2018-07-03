import { Component, OnInit } from '@angular/core';
import { PublisherService, Publicador } from '../../../Services/Publisher.service';

@Component({
  selector: ' app-page-organization',
  templateUrl: './page-organization.component.html',
  styleUrls: ['./page-organization.component.css']
})
export class PageOrganizationComponent implements OnInit {

  publicador: Publicador [] = [];
  constructor(private _servicePublisher: PublisherService) { }

  ngOnInit() {
    this.publicador = this._servicePublisher.getPublisher();
console.log(this.publicador);
  }
}
