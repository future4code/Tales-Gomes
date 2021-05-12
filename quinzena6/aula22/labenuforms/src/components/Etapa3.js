import React from "react";
import PerguntaAberta from "../components/PerguntaAberta";
import PerguntaOpcoes from "../components/PerguntaOpcoes";

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h3>Etapa 3 - Informações gerais de ensino</h3>
                <PerguntaAberta
                pergunta={"5. Por que vocês não terminou um curso de gradução?"}
                />
                <PerguntaOpcoes
                pergunta={"6. Você fez algum curso complementar?"}
                opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
                />
            </div>
        )
    }
}

export default Etapa3;