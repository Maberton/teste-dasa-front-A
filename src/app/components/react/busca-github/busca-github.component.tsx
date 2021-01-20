
import * as React from 'react';
import { styling } from "./busca-github.styles";

export default function ComponenteReact() {


    return (
        <>
          <div className="container-fluid">
            <div className="card" style={styling.cardBusca}>
              <form style={styling.form}>
                <input
                  type="text"
                  placeholder="Digite o usuário Github"
                  style={styling.usuarioGithub}
                  required
                />
                <button type="submit" className="btn btn-info"> Buscar</button>
              </form>
            </div>
          </div>
        </>
    )

}
