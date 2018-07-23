import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['../../PageOrganization/page-organization/page-organization.component.css']




})
export class BodyComponent {

    // tslint:disable-next-line:no-inferrable-types
    mostrar: boolean = false;
    personas: string [] = ['persona1', 'Persona2', ' persona3 '];
    objeto: any = {
        mensajeInicial: 'inicando con angular',
        autor: 'Mauricio Casas',
        tipo: 'Ministerial',
    };
    Informe: any = {
        publicaciones: 'cc',
        horas: 5 ,
        videos: 2,
        revisitas: 3,
        estudios: 4
    };
}
