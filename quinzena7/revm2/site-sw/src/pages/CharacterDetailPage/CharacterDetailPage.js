import React from "react"
import {getPlanet, getCharacter } from '../../services/request'

export default class CharacterDetailPage extends React.Component {
    state = {
        character: {},
        planet: ""
    }

    componentDidMount() {
        getCharacter(this.props.url, this.saveCharacter)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.character !== prevState.character) {
            getPlanet(this.state.character.homeworld, this.savePlanet)
        }
    }

    saveCharacter = (data) => {
        this.setState({character: data})
    }

    savePlanet = (data) => {
        this.setState({planet: data})
    }


    render() {
        return (
            <div>
                {this.state.character.name && this.state.planet ?
                (
                    <div>
                <p>nome: {this.state.character.name}</p>
                <p>Planeta Natal: {this.state.planet}</p>
                    </div>
                ) : <p>Carregando...</p>
            }
                <button onClick={this.props.goToListPage}>Voltar Para Lista</button>
             </div>
        )
    }
}