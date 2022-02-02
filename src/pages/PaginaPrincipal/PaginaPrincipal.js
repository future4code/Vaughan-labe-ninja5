import React from "react";

import Cabecalho from "../../components/Header/Cabecalho";
import {ConteudoPrincipal, H3, Button} from './Styled'
class PaginaPrincipal extends React.Component{
    render () {
        return (
            <div>
            <Cabecalho
                voltar={this.props.voltarHome}
                irCarrinho={this.props.irCarrinho}
            />
            <ConteudoPrincipal>
             <h1>LabeNinjas</h1>
             <H3>O talento certo no momento certo</H3>

             <Button 
             onClick={this.props.telaQueroSerNinja}
             >Quero Ser um ninja
             </Button>

             <Button 
             onClick={this.props.telaContrateNinja}
             >Contrate Ninja
             </Button>
             
             </ConteudoPrincipal>
           </div>
            
            
        )
    }
}

export default PaginaPrincipal