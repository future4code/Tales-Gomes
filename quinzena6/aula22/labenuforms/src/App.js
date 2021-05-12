import React from "react";
import "../src/css/styles.css"

import Etapa1 from "../src/components/Etapa1";
import Etapa2 from "../src/components/Etapa2";
import Etapa3 from "../src/components/Etapa3";
import Final from "../src/components/Final";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };


 proximaEtapa = () => {
   this.setState({ etapa: this.state.etapa +1});
 };

 render() {
  return (
    <div className="App">
      {this.renderizaEtapa()}
      {this.state.etapa !== 4 && (
        <button onClick={this.proximaEtapa}>Próxima etapa</button>
      )}
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
