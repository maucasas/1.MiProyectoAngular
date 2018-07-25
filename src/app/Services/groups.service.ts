import { Injectable, NgModule } from '@angular/core';
import { IPublicador, PublisherService } from './Publisher.service';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private publicadores: IPublicador [] = [];
  private groups: IPublicador [] = [];
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
  }

    export interface IGrupo {
      publicador: IPublicador;
  }


