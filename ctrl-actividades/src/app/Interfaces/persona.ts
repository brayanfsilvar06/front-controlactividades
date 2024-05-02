import { TipoDocumento } from "./tipo-documento";

export interface Persona {
    ICodigo: number,
    CNumeroIdentificacion?: string,
    CNombres?: string,
    CPrimerApellido?: string,
    CSegundoApellido?: string,
    CNumCel?: string,
    CEmail?: string,
    CEmpleado?: string,
    ITipoIdentificacion?: TipoDocumento,
    CLabelEmpleado?: string
}
