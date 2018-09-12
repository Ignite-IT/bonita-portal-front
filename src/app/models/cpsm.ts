export interface PrecargaSolicitud{
    matricula: string; 
    cuil: string;

    apyn: string;
    cp: string;
    localidad: string;
    calle: string;
    numero: string;
    piso: string;
    dpto: string;
    domicilio: string;
    email: string;

    estadoCivil: string;
    apynConyuge: string;
    localidadComp: string;
    docConyuge: string;

    telefono: string;
    celular: string;

    estado: string;
    
    edad: number;
    aptoPrestamo: string;
    destinoPrestamo: number;
    //condicion: string;
    mensaje: string;
    
    //saldoUCP: number;
    ucpPesos: number;
}

//export interface AptoPrestamo{
//    condicion: string;
//    apto: boolean;
//    msj: string;
//}

export interface Distrito{
    distrito: number;
    nombre: string;
    distritoRomano: string;
}

export interface LineaVigente{
    concepto: number;
    //descripcionConcepto: string;
    linea: string;
    descripcion: string;
}

export interface MatrizFinanciamiento{
    concepto: number;
    edadMinima: number;
    edadMaxima: number;
    cuotaMinima: number;
    cuotaMaxima: number;
    montoMinimo: number;
    montoMaximo: number;
    tipoTasa: string;
    //tasa: number;
    tipoDevengamiento: string;
    prima: number;
    descripcion: string;
    
    gastos: any;
    //importeMonedaOriginal: number;
    //importePesos: number;
    //moneda: string;
    //valorGalenoHoy: number;
    lineaUCP: string;
}

export interface DatosPersonales{
    apellido: string;
    aportes: number;
    apyn: string;
    cuil: string;
    distritoColeg: string;
    edad: number;
    email: string;
    entidad: string;
    especialidad: string;
}

export interface AptitudPrestamo{
    apto: string; //Esta viene del servicio
    apto2: string; //Esta es para la logica
}

export interface AptitudPrestamo2{
    apto2: string;
    mensaje: string;
}

export interface MedioPago{
    codigoMedioPago: number;
    descripcionMedioPago: string;
}

export interface Aval{
    apyn: string;
    celular: number;
    codPostal: string;
    cuit: string;
    domicilio: string;
    estadoCivil: number;
    email: string;
    fechaNacimiento: string;
    idAvalPrestamo: number;
    localidad: string;
    lugarNacimiento: string;
    nroDoc: number;
    sexo: string;
    tipoDoc: string;
}

export interface Inmueble {
    idExped: number;
    idInmueble: number;
    estado: string;
    domicilio: string;
    nomLocalidad: string;
    valorEstimado: number;
}

export interface Cft {
    cftTea: number;
    cftTna: number;
    tea: number;
}

export interface DeudaPrestamo {
    fechaActual: any,
    prestamos: Prestamo[];
}

export interface Prestamo {
    detalleDeuda: DetalleDeuda;
    numero: number;
    prestPlan: string
    resumen: string;
    totalIntCompens: number;
    totalIntPunitorio: number;
    totalSaldo: number;
    totalTotal: number;
}

export interface DetalleDeuda {
    concepto: number;
    cr: number;
    cuota: number;
    db: number;
    interesCompensatorio: number;
    interesPunitorio: number;
    saldo: number;
    total: number;
    vencimiento: any;
}

export interface DeudaAporteInch {
    creditosA: string;
    debitosA: string;
    detalle : any;
    fechaActual: any;
    tieneDeuda: string;
}

export interface ValorUcp {
    importe: number;
}