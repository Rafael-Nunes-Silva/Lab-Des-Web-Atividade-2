import styled from "styled-components";
import NomeLoteria from "../NomeLoteria";
import Estimativa from "../Estimativa";

interface Props {
    nome: string;
    trevo: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    valorEstimadoProximoConcurso: number;
};

const DivEsquerda = styled.div``;

export default function Esquerda(props: Props) {
    return (
        <DivEsquerda>
            <NomeLoteria
                nome={props.nome}
                trevo={props.trevo}
            />
            <Estimativa
                dataProximoConcurso={props.dataProximoConcurso}
                valorEstimadoProximoConcurso={props.valorEstimadoProximoConcurso}
            />
        </DivEsquerda>
    );
}