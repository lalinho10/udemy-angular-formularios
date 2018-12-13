import { Component }                                     from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable }                                    from 'rxjs';

@Component({
	selector: 'app-reactive',
	templateUrl: 'reactive.component.html',
	styles: [`
		.ng-invalid.ng-touched:not(form):not(div) {border:1px solid #dc3545;}
		.error-message {color:#dc3545;}
	`]
})

export class ReactiveComponent {
	myForm: FormGroup;

	iniForm: any = { nombrecompleto: { nombre: '', apellido: '' }, correo: '', pasatiempos: [] };

	usuarioEdicion: any = {
		nombrecompleto: {
			nombre: 'Michael',
			apellido: 'Jordan'
		},
		correo: 'mjordan@mail.com',
		pasatiempos: [ 'Correr', 'Dormir', 'Comer' ]
	};

	constructor() {
		this.myForm = new FormGroup({
			'nombrecompleto': new FormGroup({
				'nombre': new FormControl( '', [
					Validators.required,
					Validators.minLength( 3 )
				]),
				'apellido': new FormControl( '', [
					Validators.required,
					this.alfabetico
				])
			}),
			'correo': new FormControl( '', [
				Validators.required,
				Validators.pattern( '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' )
			]),
			'pasatiempos': new FormArray([
				new FormControl( 'Correr', Validators.required )
			]),
			'username': new FormControl( '', Validators.required, this.existeUsuario ),
			'password1': new FormControl( '', Validators.required ),
			'password2': new FormControl( '', /*[
				Validators.required,
				this.diferentes.bind( this.myForm )
			]*/)
		});

		this.myForm.controls[ 'password2' ].setValidators([
			Validators.required,
			this.diferentes.bind( this.myForm )
		]);

		//this.myForm.setValue( this.usuarioEdicion );
	}

	alfabetico( control: FormControl ): { [ key: string ]: any } {
		let ALFABETICO_REGEX = new RegExp( /^[a-zñáéíóúüA-ZÑÁÉÍÓÚÜ ]{0,25}$/ );

		if( !ALFABETICO_REGEX.test( control.value ) ) {
			return { 'alfabetico': true };
		}

		return null;
	}

	diferentes( control: FormControl ): { [ key: string ]: any } {
		//console.log( this );
		let form: any = this;

		if( control.value !== form.controls[ 'password1' ].value ) {
			return { 'diferentes': true };
		}

		return null;
	}

	existeUsuario( control: FormControl ): Promise<any> | Observable<any> {
		let promise = new Promise(
			( resolve, reject ) => {
				setTimeout( () => {
					if( control.value === 'llanda' ) {
						resolve( { existeusuario: true } );
					} else {
						resolve( null );
					}
				}, 3000 );
			}
		);

		return promise;
	}

	agregarPasatiempo(): void {
		( <FormArray> this.myForm.controls[ 'pasatiempos' ] ).push( new FormControl( '', Validators.required ) );
	}

	guardar(): void {
		console.log( this.myForm.value );
		console.log( this.myForm );

		this.myForm.reset( this.iniForm );
	}
}