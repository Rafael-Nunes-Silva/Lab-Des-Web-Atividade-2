import styled from "styled-components";
import Acumulou from "../Acumulou";
import Resultado from "../Resultado";
import Data from "../Data";

interface Props {
    dataPorExtenso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
};

const DivDireita = styled.div`
    margin-left: 50px;
`;

export default function Direita(props: Props) {
    return (
        <DivDireita>
            <Resultado dezenas={props.dezenas}/>
            <Acumulou quantidadeGanhadores={props.quantidadeGanhadores}/>
            <Data dataPorExtenso={props.dataPorExtenso} numeroDoConcurso={props.numeroDoConcurso}/>
        </DivDireita>
    );
}