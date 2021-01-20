
import * as React from 'react';

export default function ResultadoRepos(props) {

    return (
        <>
          <div className="container">
            <h1> Lista de Repositórios Públicos</h1>

            {
              props.githubRepos.map((repo, index) => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title"><a href={repo.html_url} className="card-link">{ repo.name }</a></h5>
                          <h6 className="card-subtitle mb-2 text-muted"> { repo.stargazers_count } Estrelas</h6>
                          <p className="card-text"> {repo.description} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </>
    )

}
