 import axios from "axios";
import { match } from "minimatch";
import React, {useState, useEffect} from "react";
import styled from "styled-components";


const AppContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
`


const aluno = 'tales'

export const Match = () => {
    const [ChoiceMatch, setChoiceMatch] = useState({});

    useEffect(() => {
        getProfiles();
    })

    const matchUrl = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`;

    
    const getProfiles = () => {
        axios
        .get(matchUrl)
        .then((res) => {
            setChoiceMatch(res.data.profile);
        })
        .catch((error) => {
            console.log(error.response);
        });
    };

    const chosePerson = (chose) => {
        console.log(chose)
        const body = {
            id: PerformanceObserverEntryList.id,
            choice: chose
        };
        axios.post (
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
            body
        )
        .then(res => {getProfiles()})
        .catch(err => console.log(err.response))
    };

    const reset = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
        .then(res => {getProfiles()})
        .catch(err => console.log(err.response))
    }

    
        return (
            <AppContainer>
                <h1>astroMatch</h1>
                {ChoiceMatch ? <img src={ChoiceMatch.photo} /> : <button onClick = {reset}></button>}
                <button onClick={() => chosePerson(false)}>x</button>
                <button onClick={() => chosePerson(true)}>sim</button>
            </AppContainer>

        );
}

