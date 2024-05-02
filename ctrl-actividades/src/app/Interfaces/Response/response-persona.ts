import { Persona } from "../persona";
import { ResponseGenerico } from "./response-generico";

export interface ResponsePersona {
    persona: Persona,
    listaPersonas: Persona[],
    responseGenerico: ResponseGenerico
}
