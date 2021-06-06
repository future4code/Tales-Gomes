import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardPlaylist = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`;

export default class ListaPlaylist extends React.Component {
    state = {
        playlist: []
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "tales-gomes-munoz"
            }
        })
        .then((res) => {
            this.setState({ playlist: res.data.result.list })
        })
        .catch((err) => {
            alert("Algo deu errado")
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "tales-gomes-munoz"
            }
        })
        .then((res) => {
            alert("Excluida")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const nomePlaylist = this.state.playlist.map((playlist) => {
            return <CardPlaylist key={user.id}>
                {user.name}
                <button onClick={() => this.deletarPlaylist(playlist.id)}>x</button>
            </CardPlaylist>
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Criar Playlist</button>
                <h2> Lista de Playlist</h2>
                {nomePlaylist}
            </div>
        )
    }
}