import styled from "styled-components";

interface Props {
    quantidadeGanhadores: number;
};

const DivAcumulou = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: ${props => props.theme.main};
    margin-top: 15px;
    padding-left: 15px;
`;

export default function Acumulou(props: Props) {
    function quantidadeGanhadores(): string {
        const qtdGanhadores = props.quantidadeGanhadores;
        if (qtdGanhadores === 0)
            return "ACUMULOU!";
        else if (qtdGanhadores === 1)
            return `${qtdGanhadores} GANHADOR`;
        return `${qtdGanhadores} GANHADORES`;
    }

    return (
        <DivAcumulou>
            {quantidadeGanhadores()}
        </DivAcumulou>
    );
}