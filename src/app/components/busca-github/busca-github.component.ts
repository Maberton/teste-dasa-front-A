import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/services/github.service';
import { flatMap, take } from 'rxjs/operators';
import { GithubUser } from '../shared/models/github-user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { GithubRepo } from '../shared/models/github-repo.model';

@Component({
  selector: 'app-busca-github',
  templateUrl: './busca-github.component.html',
  styleUrls: ['./busca-github.component.scss']
})
export class BuscaGithubComponent implements OnInit {

  form = new FormGroup({
    githubUser: new FormControl('')
 });


  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
  }

  buscaGithubUser(): void {

    const user = this.form.controls['githubUser'].value;

    this.githubService.obterDadosUsuario(user)
      .pipe(
        take(1)
      )
      .subscribe( (usr: GithubUser) => {
        console.log(usr);
        this.githubService.obterRepositoriosPublicos(user)
        .pipe(
          take(1)
        )
        .subscribe( (repos: GithubRepo[]) => {
          console.log(repos);
        }

         )
      }

      )
  }

  buscaGithubRepos(): void {

    const user = this.form.controls['githubUser'].value;


    this.githubService.obterDadosUsuario(user)
      .pipe(
        take(1)
      )
      .subscribe( (usr: GithubUser) => {
        console.log(usr);
        this.githubService.obterRepositoriosPublicos(user)
        .pipe(
          take(1)
        )
        .subscribe( (repos: GithubRepo[]) => {
          console.log(repos);
        }

         )
      }

      )
  }

}