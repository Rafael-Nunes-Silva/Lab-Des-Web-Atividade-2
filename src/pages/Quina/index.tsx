import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import { ThemeProvider } from "styled-components";
import Principal from "../../components/Principal";
import { temaQuina } from "../../styles/themes";
import Menu from "../../components/Menu";

export default function Megasena() {
    const { quina } = useLoteria();

    return (
        <ThemeProvider theme={temaQuina}>
            <Menu />
            <Principal
                nome="QUINA"
                trevo={trevo}
                loteria={quina}
            />
        </ThemeProvider>
    );
}