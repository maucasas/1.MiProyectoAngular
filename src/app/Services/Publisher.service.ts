import { Injectable } from '@angular/core';

@Injectable()
export class PublisherService {

    private publicadores: Publicador [] = [
        {nombre: 'Mauricio',
        apellido: 'Casas',
        tipo: 'Siervo Ministerial',
        sexo: 'Hombre'},
        {
            nombre: 'Nathalie',
            apellido: 'Rojas',
            tipo: 'Precursor',
            sexo: 'Mujer'
           }];
    constructor () {
        console.log( 'Servicio Listo para  usar' );
    }
    getPublisher() {
        return this.publicadores;
    }
    }
export interface Publicador {
    nombre: string;
    apellido: string;
    tipo: string;
    sexo: string;
}
