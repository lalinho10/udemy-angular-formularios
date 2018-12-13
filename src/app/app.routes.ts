import { RouterModule, Routes } from '@angular/router';

import { ReactiveComponent }    from './components/reactive/reactive.component';
import { TemplateComponent }    from './components/template/template.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'template', pathMatch: 'full' },
	{ path: 'template', component: TemplateComponent },
	{ path: 'reactive', component: ReactiveComponent },
	{ path: '**', redirectTo: 'template' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );