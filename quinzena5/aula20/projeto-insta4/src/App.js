import React from 'react';
import styled from 'styled-components'
import Post from '../src/components/Post/Post';
import ImagemTocando from './img/ruan-tocando.jpg'
import RuanPerfil from './img/ruan-perfil.jpg'
import IsaPerfil from './img/isa-perfil.jpg'
import IsaModelo from './img/isa-modelo.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Isa_utsonomia'}
          fotoUsuario={IsaPerfil}
          fotoPost={IsaModelo}
        />
                <Post
          nomeUsuario={'ruan_cardoso_musico'}
          fotoUsuario={RuanPerfil}
          fotoPost={ImagemTocando}
        />
                <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
