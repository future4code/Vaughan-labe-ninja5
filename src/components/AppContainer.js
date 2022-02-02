import React, { Component } from "react";
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal";
import QueroSerNinja from "../pages/PaginaQueroSerNinja/QueroSerNinja";
import ContrateNinja from "../pages/PaginaContrateNinja/ContrateNinja";
import Carrinho from "../pages/PaginaCarrinho/Carrinho";

export class AppContainer extends Component {
  state = {
    telaAtual: "principal"
  };

  trocarTela = () => {
    switch (this.state.telaAtual) {
      case "principal":
        return (
          <PaginaPrincipal
            telaContrateNinja={this.telaContrateNinja}
            telaQueroSerNinja={this.telaQueroSerNinja}
            voltarHome={this.voltarHome}
            irCarrinho={this.irCarrinho}
          />
        );
      case "quero":
        return (
          <QueroSerNinja
            voltarHome={this.voltarHome}
            irCarrinho={this.irCarrinho}
          />
        );

      case "contrate":
        return (
          <ContrateNinja
            voltarHome={this.voltarHome}
            irCarrinho={this.irCarrinho}
          />
        );

      case "carrinho":
        return (
        <Carrinho 
          voltarHome={this.voltarHome} 
          irCarrinho={this.irCarrinho} 
        />
        );

      default:
        return (
          <PaginaPrincipal
            telaContrateNinja={this.telaContrateNinja}
            telaQueroSerNinja={this.telaQueroSerNinja}
            voltarHome={this.voltarHome}
            irCarrinho={this.irCarrinho} 
          />
        );
    }
  };

  telaContrateNinja = () => {
    this.setState({ telaAtual: "contrate" });
    console.log("alo contrate um ninja");
  };
  telaQueroSerNinja = () => {
    this.setState({ telaAtual: "quero" });
    console.log("alo quero ser um ninja");
  };
  voltarHome = () => {
    this.setState({ telaAtual: "principal" });
    console.log("alo home");
  };
  irCarrinho = () => {
    this.setState({ telaAtual: "carrinho" });
    console.log("alo carrinho");
  };
 

  render() {
    return (
      <div>
        {this.trocarTela()}
      </div>
    );
  }
}
