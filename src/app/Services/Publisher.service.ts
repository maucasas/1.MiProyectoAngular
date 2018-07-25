import { Injectable } from '@angular/core';

@Injectable()
export class PublisherService {

    public publicadores: IPublicador [] = [
        {
            nombre: 'Mauricio',
            apellido: 'Casas',
            tipo: 'Siervo Ministerial',
            sexo: 'Hombre',
            celular: '3204005394',
            grupo: 3
        },
        {
            nombre: 'Kelvin',
            apellido: 'Martinez',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '333',
            grupo: 3
        },
        {
            nombre: 'Juan Carlos',
            apellido: 'Martinez',
            tipo: 'Publicaodr',
            sexo: 'Hombre',
            celular: '4444',
            grupo: 3
        },
        {
            nombre: 'Gabriel',
            apellido: 'Orozco',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '4444',
            grupo: 3
        },
        {
            nombre: 'Rosa',
            apellido: 'Casas',
            tipo: 'Publicador',
            sexo: 'Hombre',
            celular: '3204005394',
            grupo: 4
        },
        {
            nombre: 'Nathalie',
            apellido: 'Rojas',
            tipo: 'Precursor',
            sexo: 'Mujer',
            celular: '3134151574',
            grupo: 3
        }];
    constructor () {
        console.log( 'Servicio Listo para  usar' );
    }
    getPublicadores(): IPublicador [] {
        return this.publicadores;
    }

    getPublicador(idx: number) {
        return this.publicadores[idx];
    }
    }
export interface IPublicador {
    nombre: string;
    apellido: string;
    tipo: string;
    sexo: string;
    celular: string;
    grupo: number;
}
