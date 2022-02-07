import React from "react";
import Cabecalho from "../../components/Header/Cabecalho";
import { ConteudoPrincipal, CadastroDoNinja, Button, Serviço, Titulo } from './Styled'

class QueroSerNinja extends React.Component {
    render() {
        return (
            <>
                <Cabecalho
                    voltar={this.props.voltarHome}
                    irCarrinho={this.props.irCarrinho}
                />
                <ConteudoPrincipal>
                    <Titulo>
                    <h2>Seja um de nossos ninjas </h2>
                    </Titulo>
                    <CadastroDoNinja>
                        
                        <label className="Nome">Nome Completo:</label>
                        <input placeholder="Seu nome completo" />

                        <label type="email" className="email">Email:</label>
                        <input placeholder="seuemail@example.com" />

                        <label type="Number">Número:</label>
                        <input placeholder="(DDD) 91234-5678" />
                    </CadastroDoNinja>
                    <Serviço>
                        <legend>Serviços</legend>

                        <label>Qual serviço você presta ? </label>
                        <input placeholder="Serviço"></input>
                        <label>Descrição do serviço</label>
                        <input placeholder="Descrição" className="Input"></input>                 
                    </Serviço>

                    <Button>
                        Cadastrar
                    </Button>


                </ConteudoPrincipal>
            </>
        )
    }
}

export default QueroSerNinja

