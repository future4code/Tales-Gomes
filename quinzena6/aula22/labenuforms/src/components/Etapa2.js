import React from "react";
import PerguntaAberta from "../components/PerguntaAberta";
import perguntaOpcoes from "../components/PerguntaOpcoes";

class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h3>Etapa 2 - Informações do Ensino Superior</h3>
                <PerguntaAberta pergunta={"5. Qual Curso?"} />
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
            </div>
        )
    }
}

export default Etapa2;