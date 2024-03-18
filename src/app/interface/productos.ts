import { ResponseApi } from "./response-api";

export interface Productos extends ResponseApi {
    data?: ProductoData[];

}

interface ProductoData {
  DESC_NIVEL: string;
  COD_NIVEL: number;
  VALOR_STRING255_1?: string;
}