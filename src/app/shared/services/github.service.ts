import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepo } from '../models/github-repo.model';
import { GithubUser } from '../models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiBase = 'https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) {}

 /**
  * @description método para obtenção dados de perfil de usuário, do tipo
  * @type GET
  * @param user tipo: string - usuário a ser buscado
  */
  obterDadosUsuario(user: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiBase}/${user}`);
  }

 /**
  * @description método para obtenção dados de repositórios do usuário informado
  * @type GET
  * @param user tipo: string - usuário a ser buscado
  */
  obterRepositoriosPublicos(user: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.apiBase}/${user}/repos`);
  }
}
