import {Component} from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'

})
export class BodyComponent{

    mostrar:boolean=false;
    personas:string[]=["persona1","Persona2","persona3"];
    objeto:any={
        mensajeInicial:"inicando con angular",
        autor:"Mauricio Casas",
        tipo:"Ministerial",
    };
    Informe:any={
        publicaciones:"",
        horas:5,
        videos:2,
        revisitas:3,
        estudios:4
    }

    
}