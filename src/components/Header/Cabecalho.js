import React from "react";
import {Header, Imagem, Button} from './Styled'
import logo from "./Img/ninjaIcon.png"

class Cabecalho extends React.Component{
    render () {
        return (
            
            <Header>
                
                <Imagem src={logo} alt="logo" />
               <h2 >LabeNinjas </h2>
               <div>
                <Button onClick={this.props.voltar}>Home</Button>
                <Button onClick={this.props.irCarrinho}>Carrinho</Button>
                </div>
            </Header>
            
        )
    }
}

export default Cabecalho 