import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import { ThemeProvider } from "styled-components";
import Principal from "../../components/Principal";
import { temaTimemania } from "../../styles/themes";
import Menu from "../../components/Menu";

export default function Timemania() {
    const { timemania } = useLoteria();

    return (
        <ThemeProvider theme={temaTimemania}>
            <Menu />
            <Principal
                nome="TIMEMANIA"
                trevo={trevo}
                loteria={timemania}
            />
        </ThemeProvider>
    );
}