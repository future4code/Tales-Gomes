import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { AdminPage } from "../AdminPage/AdminPage";
import  ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import { ListTripsPage } from "../ListTripsPage/ListTripsPage";
import { LoginPage } from "../LoginPage/LoginPage";
import { CreateTripPage } from "../Private/CreateTripPage"
import { TripDetailsPage } from "../TripDetailsPage/TripDetailsPage";
import styled from "styled-components"

const routerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
` 

function Router() {
  return (
    <routerContainer>
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/adm-login"}>
          <AdminPage />
        </Route>
        
        <Route exact path={"/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/application"}>
          <ApplicationFormPage/>
         </Route>

         <Route exact path={"/list-trip"}>
           <ListTripsPage />
         </Route>

         <Route exact path={"/login"}>
           <LoginPage />
         </Route>

         <Route exact path={"/trips-detail"}>
           <TripDetailsPage/>
         </Route>

      </Switch>

    </BrowserRouter>
    </routerContainer>
  );
}

export default Router;
