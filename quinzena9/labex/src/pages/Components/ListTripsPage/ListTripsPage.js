import axios from "axios";
import React from "react";
import PageTitle from "../PageTitle";
import styled from "styled-components"
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemIcon, ListItemText, ListItemLink } from "@material-ui/core";
import { Link } from "react-router-dom";

const ListTripsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListTripsPage = () => {

    const history = useHistory();

    const goToAplication = () => {
        history.push("/application")
    }

    return (
        <ListTripsPageContainer>
            <PageTitle title={"Lista de Viagem"}/>
            <div>
            <Button variant="contained" color="secondary">Voltar</Button>
            <Button variant="contained" color="primary" onClick={goToAplication}>Inscrever-se</Button>
            </div>
            <p>Para vermos todas as viagens</p>
            <List component="nav" aria-label="secondary mailbox folders">
                <Link to={"/trip-detail"}>
                <ListItem button>
          <ListItemText primary="Viagem para Marte" />
        </ListItem>
                </Link>
                <Link to={"/trip-detail"}>
                <ListItem button>
          <ListItemText primary="Viagem para a Lua" />
        </ListItem>
                </Link>
      </List>
        </ListTripsPageContainer>
    );
};