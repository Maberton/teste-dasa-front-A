import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscaGithubComponent } from './components/busca-github/busca-github.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultadoPerfilComponent } from './components/resultado-perfil/resultado-perfil.component';
import { ResultadoReposComponent } from './components/resultado-repos/resultado-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaGithubComponent,
    ResultadoPerfilComponent,
    ResultadoReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
