import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import PageTitle from "../PageTitle/index"

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

const ButtonLogin = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
`


export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const history = useHistory();

    const goToBack = () => {
        history.push("/")
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitLogin = () => {
        console.log(email, password);
        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", body)
        .then((response) => {
            console.log("Deu certo: ", response.data.token)
            localStorage.setItem("token", response.data.token)
            history.push("/trip-detail")
        }).catch((error) => {
            console.log("Deu errado: ", error.response)
        })
    };

    return (
        <LoginPageContainer>
            <PageTitle title={"Login"}/>
            <div>
              <input 
               placeholder="email" 
               type="email" 
               value={email} 
               onChange={onChangeEmail}
               required
               title={"Aqui deve ser escrito um e-mail"}
               />
              <input 
               placeholder="password" 
               type="password" 
               value={password} 
               onChange={onChangePassword}
               required
               title={"Senha inválida"}
               />
             </div>
             <ButtonLogin>
             <Button variant="contained" type={"submit"} color="secondary" onClikck={goToBack}>Voltar</Button>
             <Button variant="contained" type={"submit"} color="primary" onClick={onSubmitLogin}>Enviar</Button>
             </ButtonLogin>
        </LoginPageContainer>
    );
};