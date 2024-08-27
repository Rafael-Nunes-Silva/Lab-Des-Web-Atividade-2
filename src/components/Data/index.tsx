import styled from "styled-components";

interface Props {
    dataPorExtenso: string;
    numeroDoConcurso: number;
};

const DivData = styled.div`
    margin-top: 15px;
    color: ${props => props.theme.data};
    padding-left: 15px;
    font-size: 15px;
`;

export default function Data(props: Props) {
    return (
        <DivData>
            {
                `Concurso ${props.numeroDoConcurso} - ${props.dataPorExtenso}`
            }
        </DivData>
    );
}