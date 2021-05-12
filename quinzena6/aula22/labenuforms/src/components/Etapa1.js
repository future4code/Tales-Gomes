import React from "react";
import PerguntaAberta from "../components/PerguntaAberta";
import PerguntaOpcoes from "../components/PerguntaOpcoes";

class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h3>Etapa 1 - Dados Gerais</h3>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual o seu e-mail?"} />
                <perguntaOpcoes
                pergunta={"4. Qual é a sua escolaridade?"}
                opcoes={[
                    "Ensino médio Incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
                />
            </div>
          );
        }
      }

export default Etapa1;