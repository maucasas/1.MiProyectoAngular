import { Injectable, NgModule } from '@angular/core';
import { IPublicador, PublisherService } from './Publisher.service';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { IGrupo } from './groups.service';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private publicadores: IPublicador [] = [];
  private groups;
  public groupsCount: string [] = ['1', '2', '3', '4', '5', '6', '7', '8'];

  constructor( private publisherService: PublisherService ) {
      this.publicadores = publisherService.getPublicadores();
   }
  getGroup(idx: number) {
    return this.groups[idx];
  }

  getByGroupsPublicadores(idx: number) {
    return this.publicadores;
    }

    getByGroups(idx: number) {
     const groupsPub: IPublicador [] = [];
     let grupo = {};
     for ( const pub of this.publicadores) {
        grupo = pub.grupo;
       console.log('grupo:', grupo);
       console.log('idx:', idx);
       if ( grupo == idx ) {
        groupsPub.push(pub);
       } else  {console.log('no hay elementos'); }
     }
     return groupsPub;
    }
}
export interface IGrupo {
  publicador: IPublicador;
}
