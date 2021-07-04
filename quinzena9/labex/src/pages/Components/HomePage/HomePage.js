import React from "react";
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from "react-router";
import PageTitle from "../PageTitle";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
`;

export const HomePage = () => {

    const history = useHistory();

    const goToAdm = () => {
        history.push("/login")
        console.log("Funciona")
    }

    const goToAplication = () => {
        history.push("/application")
    }
    return (
        <HomePageContainer>
            <PageTitle title={"LabeX"} />
            <ButtonStyle>
              <Button variant="contained" color="secondary" onClick={goToAplication}>Ver Viagens</Button>
              <Button variant="contained" color="primary" onClick={goToAdm}>Área de Adm</Button>
            </ButtonStyle>
        </HomePageContainer>
    );
};