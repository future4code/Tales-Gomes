import React from 'react';
import './App.css';
import CardGrande from '../src/components/CardGrande/CardGrande';
import ImagemButton from '../src/components/ImagemButton/ImagemButton';
import MinhaImagem from './components/img/eu.jpg';
import LogoTrabalho from './components/img/Taurus-Logo.png';
import LogoOutroTrabalho from './components/img/Caixa-logo.jpg';
import Button from './components/CardGrande/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaImagem} 
          nome="Tales Gomes" 
          descricao="Oi, Meu nome é Tales Gomes, sou um estudante de desenvolvimento web, estou fazendo curso na labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {LogoTrabalho}
          nome="Taurus" 
          descricao="Trabalhei como auxiliar de produção!" 
        />
        
        <CardGrande 
          imagem= {LogoOutroTrabalho} 
          nome="Caixa Econômica Federal" 
          descricao="Trabalhei como estagiário." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png Button={'www.facebook.com'}" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
