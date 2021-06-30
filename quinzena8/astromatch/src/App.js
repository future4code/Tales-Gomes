import React, {useState} from "react";
import {Match} from "./components/Match/index";
import Main from "./components/Main/Main";
import  ResetButton from "./components/ResetButton/ResetButton";

export function App() {

/*   changePage = (currentPage) => {
    setState({currentPage: currentPage})
  } */
  return (
    <div>
   {/*    <Match /> */}
     <Main />
     <ResetButton />
    </div>
  );
}

export default App;
