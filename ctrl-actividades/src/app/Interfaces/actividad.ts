import { EstadoActividad } from "./estado-actividad";
import { Persona } from "./persona";

export interface Actividad {
    ICodigo?: number,
    CTitulo?: string,
    CDescripcion?: string,
    IDiasRetraso?: number,
    FFechaEstimadaEjecucion: Date,
    IPersonaAsignada: Persona,
    IEstadoActividad: EstadoActividad,
    LMarcaTiempoEjecucionEstimada: number
}
