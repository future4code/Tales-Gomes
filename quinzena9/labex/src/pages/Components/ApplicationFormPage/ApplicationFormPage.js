import React from "react";
import styled from "styled-components";
import useForm from "../hook/useForm";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const ApplicationFormPage = () => {
    const { form, onChange, cleanFields } = useForm({
      nome: "",
      idade: "",
      text: "",
      profission: ""
    });
  
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }
    const cadastrar = (event) => {
      event.preventDefault();
      console.log("Formulário enviado!", form);
      cleanFields();
    };
  
    return (
      <FormContainer>
        <h1>Cadastro</h1>
        <form onSubmit={cadastrar}>
            <option>Escolha a sua Viagem</option>
       
          <input
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            placeholder="Nome"
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <input
            name={"idade"}
            value={form.idade}
            onChange={onChange}
            placeholder="Idade"
            required
            type={"number"}
            min={18}
          />
          <input
            name={"text"}
            value={form.text}
            onChange={onChange}
            placeholder="Texto de Candidatura"
            required
            type={"text"}
          />
          <input
            name={"profission"}
            value={form.profission}
            onChange={onChange}
            placeholder="Profissão"
            required
            type={"text"}
          />
          <div>
             <Button variant="contained" type={"submit"} color="primary">Cadastrar</Button>
             <Button variant="contained" type={"submit"} color="secondary" onClick={goBack}>Voltar</Button>
          </div>
        </form>
      </FormContainer>
    );
  };
  
  export default ApplicationFormPage;