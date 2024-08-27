import styled from "styled-components";

interface Props {
    nome: string;
    trevo: string;
};

const DivLoteria = styled.div`
    display: flex;
`;

const ImgLoteria = styled.img``;

const SpanLoteria = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: ${props => props.theme.loteria};
    margin-left: 10px;
`;

export default function NomeLoteria(props: Props) {
    return (
        <DivLoteria>
            <ImgLoteria src={props.trevo} alt="" />
            <SpanLoteria>{props.nome}</SpanLoteria>
        </DivLoteria>
    );
}