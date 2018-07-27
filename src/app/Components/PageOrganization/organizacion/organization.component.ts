import { Component, OnInit } from '@angular/core';
import { PublisherService, IPublicador } from '../../../Services/Publisher.service';
import { Router } from '@angular/router';
import { GroupsService } from '../../../Services/groups.service';

@Component({
  selector: ' app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  publicador: IPublicador [] = [];
  groups: any [];
  constructor(private router: Router, private _servicePublisher: PublisherService, private groupsService: GroupsService ) { }
    ngOnInit() {
    this.publicador = this._servicePublisher.getPublicadores();
    this.groups = this.groupsService.groupsCount;
    }

  VerPublicador(idx: number) {
    this.router.navigate(['/publisher', idx]); // router nos permite movernos a cualquier pagina desde un boton
  }
  VerGroup(idx: number) {
    this.router.navigate(['/groups', idx]);
  }

}
