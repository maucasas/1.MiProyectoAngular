import { Injectable } from '@angular/core';
import { Identifiers } from '../../../node_modules/@angular/compiler';

@Injectable()
export class PublisherService {

    public publicadores: IPublicador [] = [
        {
            nombre: 'Mauricio',
            apellido: 'Casas',
            tipo: 'Siervo Ministerial',
            sexo: 'Hombre',
            celular: '3204005394',
            grupo: 3,
            dedicacion: '15/02/2018',
            codigo: 'cod01'
        },
        {
            nombre: 'Mauricio',
            apellido: 'Ballen',
            tipo: 'Siervo Ministerial',
            sexo: 'Hombre',
            celular: '3204005394',
            grupo: 3,
            dedicacion: '15/02/2018',
            codigo: 'cod02'
        },
        {
            nombre: 'Kelvin',
            apellido: 'Martinez',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '333',
            grupo: 3,
            dedicacion: '15/02/2018',
            codigo: 'cod03'
        },
        {
            nombre: 'Juan Carlos',
            apellido: 'Martinez',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '4444',
            grupo: 3,
            dedicacion: '15/02/2018',
            codigo: 'cod04'
        },
        {
            nombre: 'Gabriel',
            apellido: 'Orozco',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '4444',
            grupo: 3,
            dedicacion: '15/02/2018',
            codigo: 'cod05'
        },
        {
            nombre: 'Rosa',
            apellido: 'Casas',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '3204005394',
            grupo: 4,
            dedicacion: '15/02/2018',
            codigo: 'cod06'
        },
        {
            nombre: 'Nathalie',
            apellido: 'Rojas',
            tipo: 'Precursor',
            sexo: 'Mujer',
            celular: '3134151574',
            grupo: 4,
            dedicacion: '15/02/2018',
            codigo: 'cod07'
        }];

    constructor () {
        console.log( 'Servicio de publicador Listo para  usar' );
    }
    getPublicadores(): IPublicador [] {
        return this.publicadores;
    }

    getPublicador(idx: number) {
        return this.publicadores[idx];
    }
    busquedasPublicador( word: string ) {
        const pubEncontrado: IPublicador [] = [];
        word = word.toLowerCase();
        console.log(word);
        for ( const pub of this.publicadores) {
            const nombre = pub.nombre.toLowerCase();
            const apellido = pub.apellido.toLowerCase();

             if (nombre.indexOf( word ) >= 0 ) {
                pubEncontrado.push(pub);
             }
             if (apellido.indexOf(word) >= 0) {
                 pubEncontrado.push(pub);
             }
        }
        return pubEncontrado;
    }
}
export interface IPublicador {
    nombre: string;
    apellido: string;
    tipo: string;
    sexo: string;
    celular: string;
    grupo: number;
    dedicacion: string;
    codigo: Identifiers;
}
