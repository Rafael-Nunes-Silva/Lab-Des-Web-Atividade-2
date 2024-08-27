export interface LoteriaContextProps {
    timemania: LoteriaProps;
    megasena: LoteriaProps;
    quina: LoteriaProps;
};

export interface LoteriaProps {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
};

export interface TemaProps {
    acumulou: string,
    data: string,
    estimativa: string,
    loteria: string,
    bola: string,
    bolaFonte: string
};