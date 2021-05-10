import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {

	state = {
		valorComentado: " ",

	}

	onChangeComentario = (event) => {
		this.setState({valorComentado: event.target.value})


		this.setState({
			valorComentado: " ",
		});

	}
	render() {
		console.log(this.state.valorComentado)
		
		return <CommentContainer>
			<InputComentario
				placeholder={'valorComentado'}
				value={this.state.valorComentado}
				onChange={this.onChangeComentario}
				
			/>
			
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}

}
