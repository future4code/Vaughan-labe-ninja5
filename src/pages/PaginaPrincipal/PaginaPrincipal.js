import React from "react";

import Cabecalho from "../../components/Header/Cabecalho";
import {ConteudoPrincipal, Button, Imagem, Butao} from './Styled'
import fotoPrincipal from "./img/ninjaLogo.png"
class PaginaPrincipal extends React.Component{
    render () {
        return (
            <div>
            <Cabecalho
                voltar={this.props.voltarHome}
                irCarrinho={this.props.irCarrinho}
            />
            <ConteudoPrincipal>
             <Imagem src={fotoPrincipal}/>
             </ConteudoPrincipal>
            <Butao>
             <Button 
             onClick={this.props.telaQueroSerNinja}
             >Quero Ser um ninja
             </Button>

             <Button 
             onClick={this.props.telaContrateNinja}
             >Contrate Ninja
             </Button>
            </Butao>
             
           </div>
            
            
        )
    }
}

export default PaginaPrincipal