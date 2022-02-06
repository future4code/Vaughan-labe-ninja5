import React from "react";
import styled from "styled-components";
import DetalheServico from "../../pages/PaginaDetalheServico/DetalheServico";

export default class ServicoCard extends React.Component {
  render() {
    const servico = this.props.servico;
    return (
      <>
        <div>
          <p>{servico.title}</p>
          <p>Preço: {servico.price}</p>
          <p>Prazo: {servico.dueDate}</p>
          <button onClick={this.props.irDetalheServico}>Ver Detalhes</button>
          <button onClick={() =>this.props.addProdutoInCar(servico.id)}>Adicionar no Carrinho</button>
        </div>
      </>
    );
  }
}
