import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaGithubComponent } from './components/busca-github/busca-github.component';

const routes: Routes = [
  { path: '', redirectTo: 'busca-github', pathMatch: 'full' },
  { path: 'busca-github', component: BuscaGithubComponent },
  { path: '**', redirectTo: 'busca-github'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
