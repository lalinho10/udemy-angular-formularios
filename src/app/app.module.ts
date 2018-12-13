import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }                         from '@angular/core';

import { AppComponent }                     from './app.component';

import { NavbarComponent }                  from './components/navbar/navbar.component';
import { ReactiveComponent }                from './components/reactive/reactive.component';
import { TemplateComponent }                from './components/template/template.component';

import { APP_ROUTING }                      from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReactiveComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
