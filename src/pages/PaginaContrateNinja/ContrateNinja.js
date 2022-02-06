import React from "react";
import Cabecalho from "../../components/Header/Cabecalho";
import Axios from "axios";
import { BASE_URL } from "../../constants/urls";
import ServicoCard from "../../components/ServicoCard/ServicoCard";
import DetalheServico from "../PaginaDetalheServico/DetalheServico";

class ContrateNinja extends React.Component {
  state = {
    arrayServicos: [
      {
        id: "efed9385-cf87-4f0e-a121-465384b3f2e4",
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-30T00:00:00.000Z",
        taken: false,
      },
    ],
    id: "",
  };

  getAllJobs = () => {
    const axiosConfig = {
      headers: { Authorization: "069afa4d-c3a0-42d3-a685-fdaa8492387a" },
    };

    Axios.get(`${BASE_URL}/jobs`, axiosConfig)
      .then((res) => {
        console.log(res);
        this.setState({ arrayServicos: res.data.jobs });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  trocaTela = () => {
    this.setState({ telaContrata: !this.state.telaContrata });
  };

  render() {
    const listaServicos = this.state.arrayServicos.map((servico) => {
      return (
        <>
          <ServicoCard
            key={servico.id}
            servico={servico}
            //   irDetalheServico={this.props.irDetalheServico}
            irDetalheServico={this.trocaTela}
          />
        </>
      );
    });

    return (
      <>
        <Cabecalho
          voltar={this.props.voltarHome}
          irCarrinho={this.props.irCarrinho}
        />
        {this.state.telaContrata ? (
          <div>{listaServicos}</div>  
        ) : (
          <DetalheServico />
        )}
        {/* // <div>{listaServicos}</div> */}
      </>
    );
  }
}

export default ContrateNinja;
