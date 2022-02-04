import React, { Component } from "react";
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal";
import QueroSerNinja from "../pages/PaginaQueroSerNinja/QueroSerNinja";
import ContrateNinja from "../pages/PaginaContrateNinja/ContrateNinja";
import Carrinho from "../pages/PaginaCarrinho/Carrinho";
import DetalheServico from "../pages/PaginaDetalheServico/DetalheServico";

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
            irDetalheServico={this.irDetalheServico}
          />
        );

      case "carrinho":
        return (
        <Carrinho 
          voltarHome={this.voltarHome} 
          irCarrinho={this.irCarrinho} 
        />
        );

      case "detalhesServico":
        return(
          <DetalheServico 
            voltarParaLista={this.telaContrateNinja}
          />
        )

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
  irDetalheServico = () => {
    this.setState({ telaAtual: "detalhesServico" })
  }
 

  render() {
    return (
      <div>
        {this.trocarTela()}
      </div>
    );
  }
}
