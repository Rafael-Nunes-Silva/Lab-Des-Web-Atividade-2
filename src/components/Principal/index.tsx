import styled from "styled-components";
import { LoteriaProps } from "../../types";
import Direita from "../Direita";
import Esquerda from "../Esquerda";
import Carregando from "../Carregando";

interface Props {
    nome: string;
    trevo: string;
    loteria: LoteriaProps;
};

const DivPrincipal = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid ${props => props.theme.principal};
`;

export default function Principal(props: Props) {
    function conteudo() {
        if (!props.loteria.dataApuracao) {
            return <Carregando />;
        }
        return (
            <DivPrincipal>
                <Esquerda
                    nome={props.nome}
                    trevo={props.trevo}
                    dataPorExtenso={props.loteria.dataPorExtenso}
                    dataProximoConcurso={props.loteria.dataProximoConcurso}
                    dezenas={props.loteria.dezenas}
                    numeroDoConcurso={props.loteria.numeroDoConcurso}
                    quantidadeGanhadores={props.loteria.quantidadeGanhadores}
                    valorEstimadoProximoConcurso={props.loteria.valorEstimadoProximoConcurso}
                />
                <Direita
                    dataPorExtenso={props.loteria.dataPorExtenso}
                    dezenas={props.loteria.dezenas}
                    numeroDoConcurso={props.loteria.numeroDoConcurso}
                    quantidadeGanhadores={props.loteria.quantidadeGanhadores}
                />
            </DivPrincipal>
        );
    }
    return conteudo();
}