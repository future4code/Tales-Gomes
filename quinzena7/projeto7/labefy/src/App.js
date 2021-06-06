import React from "react"
import ListaPlaylist from "./components/ListaPlaylist"
import PrimeiraTela from "./components/PrimeiraTela"


export default class App extends React.Component {
  state = {
    telaAtual:"cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <PrimeiraTela irParaLista={this.irParaLista}/>
        case "lista":
          return <ListaPlaylist irParaCadastro={this.irParaCadastro}/>
          default:
            return <div>Erro! Página não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}