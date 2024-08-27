import "./index.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivMenu = styled.div`
    display: flex;
    gap: 15px;

    margin-left: 15px;
`;

export default function Menu() {
    return (
        <DivMenu>
            <Link
                className="menu-link"
                id="timemania-link"
                to="/timemania"
            >Timemania</Link>
            <Link
                className="menu-link"
                id="megasena-link"
                to="/megasena"
            >Megasena</Link>
            <Link
                className="menu-link"
                id="quina-link"
                to="/quina"
            >Quina</Link>
        </DivMenu>
    );
}