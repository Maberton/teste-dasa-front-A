import { Component, Input, OnInit } from '@angular/core';
import { GithubRepo } from '../../shared/models/github-repo.model';

@Component({
  selector: 'app-resultado-repos',
  templateUrl: './resultado-repos.component.html',
  styleUrls: ['./resultado-repos.component.scss']
})
export class ResultadoReposComponent implements OnInit {

  @Input()
  dadosRepos: GithubRepo[]

  constructor() { }

  ngOnInit(): void {
  }

}
