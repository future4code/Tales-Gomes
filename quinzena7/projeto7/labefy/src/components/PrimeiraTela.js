import React from "react"
import axios from "axios"

export default class PrimeiraTela extends React.Component {
    state = {
        nome: ""
    }

    handlePlaylist = (event) => {
        this.setState({nome: event.target.value})
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "tales-gomes-munoz"
            }
        })
        .then((res) => {
            alert("Playlist foi criada com sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para a Lista de Playlist</button>
                <h2>Playlist</h2>
                <h3>Colocar a sua playlist</h3>
                <input
                placeholder={"nome"}
                value={this.state.nome}
                onChange={this.handlePlaylist}
                />
                <button onClick={this.criarPlaylist}>Adicionar</button>
            </div>
        )
    }
}