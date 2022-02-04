import Axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";

export default class DetalheServico extends React.Component {
  state = {
    servico: {
        id: "efed9385-cf87-4f0e-a121-465384b3f2e4",
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-30T00:00:00.000Z",
        taken: false,
      },
  };

  getJobById = (id) => {
    const axiosConfig = {
      headers: { Authorization: "069afa4d-c3a0-42d3-a685-fdaa8492387a" },
    };

    Axios.get(`${BASE_URL}/jobs/${id}`, axiosConfig)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // alert(err.response.data.error);
      });
  };

  render() {
    return (
      <>
        {this.getJobById(this.props.id)}
        <h2>{this.state.servico.title}</h2>
        <p>Preço: {this.state.servico.price}</p>
        <p>Prazo: {this.state.servico.dueDate}</p>
        <p>{this.state.servico.description}</p>
        <ul>
          <li>{this.state.servico.paymentMethods}</li>
        </ul>
        <button onClick={this.props.voltarParaLista}>
          Voltar para a lista
        </button>
      </>
    );
  }
}
