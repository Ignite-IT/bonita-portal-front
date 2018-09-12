export class Tramite{
    public id_tramite: number;
    public tipoTramite: TipoTramite; /*Relacion*/
    public distrito: string;
    public nro_expediente: string;
    public nom_expediente: string;
    public fecha_inicio: any;    
    
    public matricula: string;
    public cuil: string;
    public apynombre: string;
    
    public condicion: number;    
    public admisible: boolean;
    public nota_excepcion: boolean;
    public admisible_excepcion: boolean;    
    public fecha_archivo: any;
    public observaciones: string;
    public observa_archivo: string;
    public fecha_tratamiento: any;
    
    public inicio_proceso: string;
    public id_instancia_proceso: string;
    public cod_actividad: string;
    public estado: number;
    
    constructor(json?) {
        if(json){
            this.id_tramite= json.id_tramite;
            this.distrito= json.distrito;
            this.nro_expediente= json.nro_expediente;
            this.nom_expediente= json.nom_expediente;
            this.matricula= json.matricula;
            this.cuil= json.cuil;
            this.condicion= json.condicion;
            this.apynombre= json.apynombre;
            this.fecha_inicio= json.fecha_inicio; /*VER*/
            this.admisible= json.admisible;
            
            this.nota_excepcion= json.nota_excepcion;
            this.admisible_excepcion= json.admisible_excepcion;
            this.fecha_archivo= json.fecha_archivo; /*VER*/
            this.observaciones= json.observaciones;
            this.observa_archivo= json.observa_archivo;
            if(json.fecha_tratamiento) {
                this.fecha_tratamiento = new Date(json.fecha_tratamiento);
            }
            
            this.inicio_proceso= json.inicio_proceso;
            this.id_instancia_proceso= json.id_instancia_proceso;
            this.cod_actividad= json.cod_actividad;
            this.estado= json.estado;

            if(json.tipoTramite){
                this.tipoTramite = new TipoTramite(json.tipoTramite);                
            }
//            if(json.distrinto){
//                this.distrinto = new Distrito(json.distrinto);                
//            }
        }
    }
}

export class SolicitudPrestamo{
    public id_solicitud: number;
    public tramite: Tramite;
    public tipo_prestamo: any;
    public destino_prestamo: any;
    public linea_ptmo: string;    
    public concepto: number;
    public linea_ucp: boolean;
    
    public monto_solicitado: number;
    public plazo_solicitado: number;
    public lugar_solicitud: string;
    public fecha_solicitud: any;
    public cartera_abierta: boolean;
    public tipo_personal: string;
    public medio_pago: string;
    public es_hipotecario: boolean;
    public tipo_hipotecario: string;    
    public mancomunado: boolean;
    
    public forma_cobro: string;
    public suma_ingresos: string;
    public cbu_tarjeta: string;
    public banco: string;
    public vto_tarjeta: string;
    public admisible_delegacion: boolean;
    
    public gtosadm_recibo: string;
    public gtosadm_fecha: any;
    public gtosadm_monto: number
    
    public inf_seguros_auto: boolean;
    public usuario_evaluador: number;
    public requiere_inf_ingresos: boolean;
    public requiere_inf_haberes: boolean;
    public requiere_inf_seguros: boolean;
    public inconsistencia_ingresos: boolean;
    public ptmo_vigente: boolean;
    public caso_especial: boolean;
    public requiere_inf_evaluador: boolean;
    public monto_evaluador: number;
    public plazo_evaluador: number;
    public califica_evaluador: string;
    public calificacion_jefeptmo: string;
    public recomienda_evaluador: string;
    public confirma_evaluacion: boolean;
    public calificacion: string;
    
    //PARA ANALGTIA_03
    public anticipo_gastos: number;
    
    //PARA ANALGTIA_04
    public escribano_apynom: string;
    public escribano_cuit: string;
    public tasador_apynom: string;
    public tasador_cuit: string;
    
    //PARA ANALGTIA_05
    public monto_evaluador_anal_gtia: number;
    public plazo_evaluador_anal_gtia: number;
    public nuevas_condiciones: boolean;

    //PARA ANALGTIA_06
    public acepta_condiciones: boolean;
    
    //FRM_002
    public monto_comision: number;
    public plazo_comision: number;
    public recomienda_comision: string;
    public califica_comision: string;
    
    public monto_otorgado: number;
    public plazo_otorgado: number;
    public resolucion: string;
    
    public texto: string;
    
    public selectedInTable: boolean = true;
    
    constructor(json?) {
        if(json){
            this.id_solicitud= json.id_solicitud;
            this.tipo_prestamo= json.tipo_prestamo;
            this.destino_prestamo= json.destino_prestamo;
            this.linea_ptmo= json.linea_ptmo;
            this.concepto= json.concepto;
            
            this.monto_solicitado= json.monto_solicitado;
            this.plazo_solicitado= json.plazo_solicitado;
            this.lugar_solicitud= json.lugar_solicitud;
            this.fecha_solicitud= new Date(json.fecha_solicitud);
            this.cartera_abierta= json.cartera_abierta;
            this.tipo_personal= json.tipo_personal;
            this.es_hipotecario= json.es_hipotecario;
            this.tipo_hipotecario= json.tipo_hipotecario;

            this.mancomunado= json.mancomunado;
            this.medio_pago= json.medio_pago;
            this.forma_cobro= json.forma_cobro;
            this.suma_ingresos = json.suma_ingresos;
            this.cbu_tarjeta = json.cbu_tarjeta;
            this.banco = json.banco;
            this.vto_tarjeta = json.vto_tarjeta;
            this.admisible_delegacion= json.admisible_delegacion;
            this.inf_seguros_auto= json.inf_seguros_auto;
            this.usuario_evaluador= json.usuario_evaluador;
            
            this.gtosadm_recibo = json.gtosadm_recibo;
            this.gtosadm_fecha= json.gtosadm_fecha;
            this.gtosadm_monto = json.gtosadm_monto;
            
            this.requiere_inf_ingresos= json.requiere_inf_ingresos;
            this.requiere_inf_haberes= json.requiere_inf_haberes;
            this.requiere_inf_seguros= json.requiere_inf_seguros;
            this.inconsistencia_ingresos= json.inconsistencia_ingresos;
            this.ptmo_vigente= json.ptmo_vigente;
            this.caso_especial= json.caso_especial;
            
            this.requiere_inf_evaluador= json.requiere_inf_evaluador;
            this.monto_evaluador= json.monto_evaluador;
            this.plazo_evaluador= json.plazo_evaluador;
            this.califica_evaluador= json.califica_evaluador;
            this.calificacion_jefeptmo = json.calificacion_jefeptmo;
            this.recomienda_evaluador= json.recomienda_evaluador;
            this.confirma_evaluacion= json.confirma_evaluacion;
            this.calificacion= json.calificacion;
            
            //PARA ANALGTIA_03
            this.anticipo_gastos = json.anticipo_gastos;
            
            //PARA ANALGTIA_04
            this.escribano_apynom= json.escribano_apynom;
            this.escribano_cuit= json.escribano_cuit;
            this.tasador_apynom= json.tasador_apynom;
            this.tasador_cuit= json.tasador_cuit;
            
            //PARA ANALGTIA_05
            this.monto_evaluador_anal_gtia= json.monto_evaluador_anal_gtia;
            this.plazo_evaluador_anal_gtia= json.plazo_evaluador_anal_gtia;
            this.nuevas_condiciones= json.nuevas_condiciones;
            
            //PARA ANALGTIA_06
            this.acepta_condiciones = json.acepta_condiciones;
            
            //PARA FRM_002
            this.monto_comision = json.monto_comision;
            this.plazo_comision = json.plazo_comision;
            this.recomienda_comision = json.recomienda_comision;
            this.califica_comision = json.califica_comision;
            
            this.monto_otorgado = json.monto_otorgado;
            this.plazo_otorgado = json.plazo_otorgado;
            this.resolucion = json.resolucion;
            
            this.texto = json.texto;
            
            if(json.tramite){
                this.tramite = new Tramite(json.tramite);                
            }
        }
    }
    
    public iniciar(tramite: Tramite){
        this.tramite= tramite;
        this.destino_prestamo = tramite.condicion;// == 'Afiliado' ? 1 : 8;
        if (this.destino_prestamo == 8){
            this.tipo_prestamo= 3;
        }
        //this.lugar_solicitud = tramite.distrito;
        if (tramite.estado == 3){
            this.calificacion = 'A';
        }
        this.fecha_solicitud = new Date();
    }
    
    public prestamoDetalle(){
        let detalle = this.linea_ptmo + " ";
        if (this.es_hipotecario){
            detalle += this.tipo_hipotecario;
        }else{
            detalle += this.tipo_personal;
        }
        return detalle;
    }
}

export class SolicitudPrestamoDetalle{
    public id_solicitud: number;
    public orden: number;
    public tipo: string;
    
    public nro_matricula: string;
    public cuit: string;
    public dni: string;
    public apynombre: string;
    public estado_civil: string;
    public nom_conyuge: string;
    public dni_conyuge: string;
    public calle: string;
    public numero: string;
    public piso: string;
    public depto: string;
    public localidad: string;
    public cod_postal: string;
    public provincia: string;
    public telefono_part: string;
    public telefono_movil: string;
    public email: string;
    public edad: number;
    
    public prima: number;
    public salud: boolean;
    public excede_limite: boolean;
    public excede_edad: boolean;
    
    public porcentaje: number;
    
    constructor(json?) {
        if(json){
            this.id_solicitud= json.id_solicitud;
            this.orden= json.orden;
            this.tipo= json.tipo;
            
            this.nro_matricula= json.nro_matricula;
            this.cuit= json.cuit;
            this.dni = json.dni;
            this.apynombre= json.apynombre;
            this.estado_civil= json.estado_civil;
            this.nom_conyuge= json.nom_conyuge;
            this.calle= json.calle;
            this.numero= json.numero;
            this.piso= json.piso;
            this.depto= json.depto;
            this.localidad= json.localidad;
            this.cod_postal= json.cod_postal;
            this.provincia= json.provincia;
            this.telefono_part= json.telefono_part;
            this.telefono_movil= json.telefono_movil;
            this.email= json.email;
            this.edad = json.edad;
            
            this.prima = json.prima;
            this.salud = json.salud;
            this.excede_limite = json.excede_limite;
            this.excede_edad = json.excede_edad;
            
            this.porcentaje = json.porcentaje;
        }
    }
}

export class SolicitudPrestamoInmueble{
    public id_solicitud: number;
    public nomenclatura: string;
    public descripcion: string;
    public tipo_propiedad: string;
    public anio: string;
    public cubierto: number;
    public lote: number;
    public valor_estimado: number;
    public precio_compra: number;
    public calle: string;
    public nro: string;
    public piso: string;
    public depto: string;
    public localidad: string;
    public cod_postal: string;
    public provincia: string;
    public acreedor_nombre: string;
    public acreedor_monto: number;
    public acreedor_saldo: number;
    
    constructor(json?){
        if(json){
            this.id_solicitud= json.id_solicitud;
            this.nomenclatura= json.nomenclatura;
            this.descripcion= json.descripcion;
            this.tipo_propiedad= json.tipo_propiedad;
            this.anio= json.anio;
            this.cubierto= json.cubierto;
            this.lote= json.lote;
            this.valor_estimado= json.valor_estimado;
            this.precio_compra= json.precio_compra;
            this.calle= json.calle;
            this.nro= json.nro;
            this.piso= json.piso;
            this.depto= json.depto;
            this.localidad= json.localidad;
            this.cod_postal= json.cod_postal;
            this.provincia= json.provincia;
            this.acreedor_nombre= json.acreedor_nombre;
            this.acreedor_monto= json.acreedor_monto;
            this.acreedor_saldo= json.acreedor_saldo;
        }
    }
}

export class TramiteMovimiento{
    public id_tramite_movimiento: number;
    public id_tramite: number;
    public fecha: any;
    public usuario: number;
    public usuario_detalle: string;
    public grupo: number;
    public cod_actividad: string;
    public observaciones: string;
    
    public actividad: any;
    
    constructor(json?){
        if(json){
            this.id_tramite_movimiento= json.id_tramite_movimiento;
            this.id_tramite= json.id_tramite;
            this.fecha= new Date(json.fecha);
            this.usuario= json.usuario;
            this.usuario_detalle = json.usuario_detalle;
            this.grupo= json.grupo;
            this.cod_actividad= json.cod_actividad;
            this.observaciones= json.observaciones;
            //DETALLE
            this.actividad = json.actividad;            
        }
    }
}

export class TipoTramite{
    public tipo_tramite: number;
    public descripcion: string;
    public abreviatura: string;
    public proceso: number;
    
    constructor(json?){
        if(json){
            this.tipo_tramite= json.tipo_tramite;
            this.descripcion= json.descripcion;
            this.abreviatura= json.abreviatura;
            this.proceso= json.proceso;
        }
    }
}