
import * as React from 'react';

export default function ResultadoPerfil(props) {

  const styling = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      color: '#ffffff',
      marginTop: '20px',
    },
    imagem: {
      maxWidth: '200px',
      margin: '0 auto',
    },
  }

    return (
        <>
          <div style={styling.container}>
            <img
              src={props.githubUser.avatar_url}
              alt="Avatar do perfil no GitHub"
              style={styling.imagem}
            />

            <h2> { props.githubUser.name }</h2>

            <strong><p> {props.githubUser.location} </p></strong>
          </div>
        </>
    )

}
