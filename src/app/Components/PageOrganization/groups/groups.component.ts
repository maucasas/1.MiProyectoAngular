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
  public grupos: any;

  constructor( private activatedRoute: ActivatedRoute, private groupsService: GroupsService )  {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.grupos = this.groupsService.getByGroups(params['id']);
    });
  }

}
