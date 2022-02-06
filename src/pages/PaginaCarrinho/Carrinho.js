import React from "react";
import Cabecalho from "../../components/Header/Cabecalho";

// import {BASE_URL} from "../../constants/urls"
// import Axios from "axios";
class Carrinho extends React.Component{
    
    valorTotal = () =>{
        let valueTotal = 0;
        for (const product of this.props.listaDeServico) {
            valueTotal += product.price * product.quantidade
            
        }
        return valueTotal
    }
    
    render () {

        return (
            <>
            <Cabecalho
                 voltar={this.props.voltarHome}
                 irCarrinho={this.props.irCarrinho}
            />
            {console.log(this.valorTotal())}
            
            </>
        )
    }
}

export default Carrinho