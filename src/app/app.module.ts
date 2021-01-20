import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BuscaGithubComponent } from './components/busca-github/busca-github.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultadoPerfilComponent } from './components/resultado-perfil/resultado-perfil.component';
import { ResultadoReposComponent } from './components/resultado-repos/resultado-repos.component';
import { ToastrModule } from 'ngx-toastr';
import { BuscaGithubWrapper } from './components/react/busca-github/busca-github.wrapper';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BuscaGithubComponent,
    ResultadoPerfilComponent,
    ResultadoReposComponent,
    BuscaGithubWrapper
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
