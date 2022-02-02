import React from "react";
import {Header} from './Styled'

class Cabecalho extends React.Component{
    render () {
        return (
            
            <Header>
               <h2>LabeNinjas</h2>
               <div>
                <button onClick={this.props.voltar}>Home</button>
                <button onClick={this.props.irCarrinho}>Carrinho</button>
                </div>
            </Header>
            
        )
    }
}

export default Cabecalho 