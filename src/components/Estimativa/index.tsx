import styled from "styled-components";

interface Props {
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number
};

const DivEstimativa = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
`;

const DivTextoEstimativa = styled.div`
    font-size: 15px;
    color: ${props => props.theme.estimativa};
`;

const DivValorEstimativa = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: ${props => props.theme.estimativa};
`;

export default function Estimativa(props: Props) {
    return (
        <DivEstimativa>
            <DivTextoEstimativa>
                Estimativa de prêmio do próximo concurso.
                Sorteio em {props.dataProximoConcurso}:
            </DivTextoEstimativa>
            <DivValorEstimativa>
                {props.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                })}
            </DivValorEstimativa>
        </DivEstimativa>
    );
}