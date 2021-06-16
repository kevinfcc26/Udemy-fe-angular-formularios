import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Kevin',
    apellido: 'Carrillo',
    correo: 'kevinfcc26@gmail.com',
    pais: 'COL',
    genero: 'M'
  }

  paises: any[] =[];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
        .subscribe( paises => {
          this.paises = paises;
          this.paises.unshift({
            nombre: '[seleccione Pais]',
            codigo: ''
          })
        });
  }

  guardar( forma: NgForm ){
    console.log( forma.value );
    if ( forma.invalid ) {
      
      Object.values( forma.controls ).forEach( control => {
        control.markAllAsTouched();
      }); 
      
      return;
    }
  }
}
