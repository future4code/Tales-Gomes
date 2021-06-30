import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { ListTripsPage } from "./pages/ListTripsPage";
import { LoginPage } from "./pages/LoginPage";
import { CreateTripPage } from "./pages/CreateTripPage"
import { TripDetailsPage } from "./pages/TripDetailsPage"

function App() {
  return (
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

         <Route exact path={"/trip-detail"}>
           <TripDetailsPage />
         </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
