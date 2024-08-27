import { createContext, useEffect, useState } from "react";
import { LoteriaContextProps, LoteriaProps } from "../types";
import loteria from "../services/Loteria";

export const Contexto = createContext({} as LoteriaContextProps);

export function Provider({ children }: any) {
  const [megasena, setMegasena] = useState({} as LoteriaProps);
  const [timemania, setTimemania] = useState({} as LoteriaProps);
  const [quina, setQuina] = useState({} as LoteriaProps);

  useEffect(() => {
    (async function () {
      const r = await loteria.get();
      setMegasena(r.megasena);
      setTimemania(r.timemania);
      setQuina(r.quina);
      console.log( r );
    })();
  }, []);

  return (
    <Contexto.Provider value={{ megasena, timemania, quina }}>
        {children}
    </Contexto.Provider>
  );
}
