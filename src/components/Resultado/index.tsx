import styled from "styled-components";

interface Props {
    dezenas: string[];
};

const DivResultado = styled.div`
    display: flex;
`;

const DivBola = styled.div`
    font-size: 18px;
    font-weight: bold;
    background-color: ${props => props.theme.bola};
    color: ${props => props.theme.bolaFonte};
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
`;

export default function Resultado(props: Props) {
    return (
        <DivResultado>
            {
                props.dezenas.map(dezena =>
                    <DivBola key={dezena}>{dezena}</DivBola>
                )
            }
        </DivResultado>
    );
}