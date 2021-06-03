import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { CharacterCard } from "../CharacterListPage/styled"
import {getCaractersList} from '../../services/request'

export default class CharacterListPage extends React.Component {
    state = {
        charactersList: []
    }

    componentDidMount() {
        getCaractersList(this.saveCharacter)
    }

    saveCharacter = (data) => {
        this.setState({charactersList: data})
    }

    render() {
        const characters = this.state.charactersList.map((person) => {
            return ( 
            <CharacterCard 
              key={person.url}
              onClick={() => this.props.goToDetailPage(person.url)}
              >
                  {person.name}
            </CharacterCard>
            )
        })
        return <div>{characters}</div>
    }
}