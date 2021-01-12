import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '../shared/models/github-user.model';

@Component({
  selector: 'app-resultado-perfil',
  templateUrl: './resultado-perfil.component.html',
  styleUrls: ['./resultado-perfil.component.scss']
})
export class ResultadoPerfilComponent implements OnInit {

  @Input()
  dadosPerfil: GithubUser

  constructor() { }

  ngOnInit(): void {
  }

}
