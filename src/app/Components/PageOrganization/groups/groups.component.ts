import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService, IGrupo } from '../../../Services/groups.service';
import { IPublicador } from '../../../Services/Publisher.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public grupos: IPublicador [] = [];

  constructor( private activatedRoute: ActivatedRoute, private groupsService: GroupsService, private router: Router )  {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.grupos = this.groupsService.getByGroups(params['id']);
    });
  }

  verPublicador(cod: string) {
    this.router.navigate(['/publisher', cod ]); /// este metodo puede recibir un parametro por medio de l output del Hijo Card

    console.log( cod );
  }

}
