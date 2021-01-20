import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared/services/github.service';
import { take } from 'rxjs/operators';
import { GithubUser } from '../../shared/models/github-user.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubRepo } from '../../shared/models/github-repo.model';
import { MessageHandlerService } from 'src/app/shared/services/message-handler.service';

@Component({
  selector: 'app-busca-github',
  templateUrl: './busca-github.component.html',
  styleUrls: ['./busca-github.component.scss']
})
export class BuscaGithubComponent implements OnInit {

  exibePerfil = false;
  exibeRepos = false;
  erroInput = false;
  carregandoPerfil = false;
  carregandoRepos = false;
  dadosPerfil: GithubUser;
  dadosRepos: GithubRepo[];
  form: FormGroup
  inputUser: AbstractControl;
  habilitaReact: boolean;

  constructor(
    private githubService: GithubService,
    private formBuilder: FormBuilder,
    private msg: MessageHandlerService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      githubUser: ['', [Validators.required]]
    })
    this.inputUser = this.form.get('githubUser');
    this.habilitaReact = true;
  }

  buscaGithubUser(): void {

    const user = this.inputUser.value;

    this.resetBusca();

    if (this.inputInvalido(user)) { return; };

    this.carregandoPerfil  = true;

    this.githubService.obterDadosUsuario(user)
      .pipe(
        take(1)
      )
      .subscribe( (usr: GithubUser) => {
          this.exibePerfil = true;
          this.dadosPerfil = usr;
          this.carregandoPerfil = false;
          this.buscaGithubRepos(user);
        }
        ,(erro) => {
          if (erro.status && erro.status === 404) {
            this.msg.handleMessage('warning', 'Usuário não encontrado');
          } else {
            this.msg.handleMessage('error', erro.message);
          }
          this.carregandoPerfil = false;
        }
      )
  }

  private buscaGithubRepos(user: string): void {

    this.carregandoRepos = true;

    this.githubService.obterRepositoriosPublicos(user)
    .pipe(
      take(1)
    )
    .subscribe( (repos: GithubRepo[]) => {
        this.dadosRepos = repos;
        this.carregandoRepos = false;
        this.exibeMensagem(repos);
      }
      ,(erro) => {this.msg.handleMessage('error', erro);}
    )
  }

  private exibeMensagem(repos: GithubRepo[]): void {
    if (repos.length && repos.length > 0) {
      this.msg.handleMessage('success', 'Dados encontrados para o usuário informado');
      this.exibeRepos = true;
    } else {
      this.msg.handleMessage('warning', 'O Usuário não possui repositórios publicos para exibição');
    }
  }

  private resetBusca(): void {
    this.exibePerfil = false;
    this.exibeRepos = false;
    this.dadosPerfil = null;
    this.dadosRepos = null;
  }

  private inputInvalido(user: string): boolean {

    const usuarioValido = user.trim() !== '';

    if (!usuarioValido) {
      this.msg.handleMessage('warning', 'Informe um usuário para busca');
      this.erroInput = true;
      this.inputUser.setValue('');
      return true;
    }
    return false;
  }

  ligaDesligaReact(): void{
    this.habilitaReact = !this.habilitaReact
  }
}
