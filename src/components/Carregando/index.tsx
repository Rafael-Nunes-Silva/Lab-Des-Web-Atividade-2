import styled from "styled-components"

const DivCarregando = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    font-family: roboto;
`;

export default function Carregando() {
    return (
        <DivCarregando>
            <h3>Carregando...</h3>
        </DivCarregando>
    );
}