import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const history = useHistory();


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
        <div>
            <h1>LoginPage</h1>
            <input 
             placeholder="email" 
             type="email" 
             value={email} 
             onChange={onChangeEmail}
             />
            <input 
             placeholder="password" 
             type="password" 
             value={password} 
             onChange={onChangePassword}
             />
             <button onClick={onSubmitLogin}>Enviar</button>
            <p>Para fazermos login como administrador</p>
        </div>
    );
};