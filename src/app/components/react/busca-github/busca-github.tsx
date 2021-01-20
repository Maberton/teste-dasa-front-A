
import * as React from 'react';
import { useState } from 'react';
import ResultadoPerfil from '../resultado-perfil/resultado-perfil';
import ResultadoRepos from '../resultado-repos/resultado.repos';
import { GithubUser } from "../../../shared/models/github-user.model";
import { api } from "../../../shared/services/github.service.react";
import { GithubRepo } from 'src/app/shared/models/github-repo.model';

export default function ComponenteReact() {

    const [user, setUser] = useState('');
    const [exibePerfil, setExibePerfil] = useState(false);
    const [exibeRepos, setExibeRepos] = useState(false);
    const [githubUser, setGithubUser] = useState<GithubUser>(new GithubUser());
    const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
    bla: Boolean;

    const styling = {
      cardBusca: {
        backgroundColor: '#3d8bfd',
        padding: '20px',
        marginBottom: '20px',
      },
      form: {
        display: 'flex',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      usuarioGithub: {
        flex: 1,
        height: '50px',
        borderRadius: '5px',
        borderStyle: 'hidden',
        outlineWidth: 0,
        marginRight: '20px',
        textAlign: 'center' as 'center',
        fontSize: 'large',
        paddingLeft: '20px',
      }
    }

    function handleRegister(event) {


      api.get(`${user}`)
      .then(response => {
        setGithubUser(response.data);
      })

      event.preventDefault();
      setExibePerfil(true);
      obterRepositorios();
    }

    function obterRepositorios() {
      api.get(`${user}/repos`)
      .then(response => {
        setGithubRepos(response.data);
        setExibeRepos(true);
      })
    }

    return (
        <>
          <div className="container-fluid">
            <div className="card" style={styling.cardBusca}>
              <form style={styling.form} onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="Digite o usuário Github"
                  style={styling.usuarioGithub}
                  onChange={event => setUser(event.target.value)}
                  required
                />
                <button type="submit" className="btn btn-info"> Buscar</button>
              </form>
              {exibePerfil ? <ResultadoPerfil githubUser={githubUser}/> : null}
            </div>
            {exibeRepos ? <ResultadoRepos githubRepos={githubRepos}/> : null}
          </div>
        </>
    )

}
