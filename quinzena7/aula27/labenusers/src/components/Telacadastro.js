import React from "react"
import axios from "axios"
import styled from "styled-components"

const Cadastro = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 20%;
margin: 0 auto;
padding: 30px;

div {
  margin-bottom: 15px;
}
`;


export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "tales-gomes"
            }
        })
        .then((res) => {
            alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    render() {
        return (

            <Cadastro>
            <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
            <h2>Cadastro</h2>
            <h3>Colocar Nome:</h3>
            <input
             placeholder={"nome"}
             value={this.state.nome}
             onChange={this.handleNome}
            />
            <h3>Colocar E-mail:</h3>
            <input
             placeholder={"E-mail"}
             value={this.state.email}
             onChange={this.handleEmail}
             />
            <button onClick={this.fazerCadastro}>Cadastar</button>
            </Cadastro>
        )
    }
}