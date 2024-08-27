import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./contexts";
import Megasena from "./pages/Megasena";
import Quina from "./pages/Quina";
import Timemania from "./pages/Timemania";
import Menu from "./components/Menu";
import styled from "styled-components";

const DivPrincipalBloco = styled.div`
  padding: 0px 20px;
  font-family: roboto;
`;

export default function App() {
  return (
    <Provider>
      <DivPrincipalBloco>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/timemania" element={<Timemania />} />
            <Route path="/megasena" element={<Megasena />} />
            <Route path="/quina" element={<Quina />} />
          </Routes>
        </BrowserRouter>
      </DivPrincipalBloco>
    </Provider>
  );
}
