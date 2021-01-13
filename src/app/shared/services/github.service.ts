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

  obterDadosUsuario(user: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiBase}/${user}`);
  }

  obterRepositoriosPublicos(user: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.apiBase}/${user}/repos`);
  }
}
