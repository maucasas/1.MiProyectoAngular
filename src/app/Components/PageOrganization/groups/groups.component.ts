import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService, IGrupo } from '../../../Services/groups.service';
import { IPublicador } from '../../../Services/Publisher.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public grupos: IPublicador [] = [];

  constructor( private activatedRoute: ActivatedRoute, private groupsService: GroupsService )  {
      this.activatedRoute.params.subscribe(params => {
      this.grupos = groupsService.getByGroupsPublicadores(params['id']);
      console.log(this.grupos);
    });
  }

  ngOnInit() {
  }

}
