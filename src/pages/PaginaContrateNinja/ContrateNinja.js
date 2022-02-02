import React from "react";
import Cabecalho from "../../components/Header/Cabecalho";

class ContrateNinja extends React.Component{
    render () {
        return (
            <>
            <Cabecalho
                 voltar={this.props.voltarHome}
                 irCarrinho={this.props.irCarrinho}
            />
            <div>
            {/* Implenta seu código aqui */}
            <h2>Contrate um ninja</h2>
            </div>
            </>
        )
    }
}

export default ContrateNinja