import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

@Component({
	selector: 'app-template',
	templateUrl: 'template.component.html',
	styles: [`
		.ng-invalid.ng-touched:not(form) {border:1px solid #dc3545;}
		.error-message {color:#dc3545;}
	`]
})

export class TemplateComponent {
	usuario: Object = {
		nombre: null,
		apellido: null,
		email: null,
		pais: '',
		genero: null,
		acepta: false
	};

	paises: Object[] = [
		{ clave: 'MEX', nombre: 'México' },
		{ clave: 'CRI', nombre: 'Costa Rica' },
		{ clave: 'ITA', nombre: 'Italia' },
		{ clave: 'ESP', nombre: 'España' }
	];

	generos: string[] = [ 'Masculino', 'Femenino', 'Sin definir' ];

	guardar( form: NgForm ): void {
		console.log( 'Objeto ngForm: ', form );
		console.log( 'Objeto value del ngForm: ', form.value );
		console.log( 'Objeto usuario: ', this.usuario );
	}
}