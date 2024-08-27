import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import { ThemeProvider } from "styled-components";
import Principal from "../../components/Principal";
import { temaMegasena } from "../../styles/themes";
import Menu from "../../components/Menu";

export default function Megasena() {
    const { megasena } = useLoteria();

    return (
        <ThemeProvider theme={temaMegasena}>
            <Menu />
            <Principal
                nome="MEGA-SENA"
                trevo={trevo}
                loteria={megasena}
            />
        </ThemeProvider>
    );
}