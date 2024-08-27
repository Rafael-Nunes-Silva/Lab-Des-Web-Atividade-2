import { LoteriaContextProps } from "../types";
import api from "./api";

class Loteria {
    async get(): Promise<LoteriaContextProps> {
        const {data} = await api.get("/");
        return data;
    }
}

const loteria = new Loteria();
export default loteria;
