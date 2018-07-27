export class Documento{
    public id_documento: number;
    public id_tramite: number;
    public tipoDocumento: TipoDocumento;
    public claseDocumento: ClaseDocumento;
    public nom_documento: string;
    public descripcion: string;
    public texto_html: string;
    public url: string;
    public cod_actividad: string;
    public nro_nota: string;
    public fecha_nota: any;
    public usuario: string;
    public grupo: string;
    public fecha_carga: any;
    public observaciones: string;
    public adjunto: number;
    public reemplaza: number;
    public estado: EstadoDocumento;
    
    constructor(json?){
        if(json){
            this.id_documento= json.id_documento;
            this.id_tramite= json.id_tramite;
            this.nom_documento= json.nom_documento;
            this.descripcion= json.descripcion;
            this.texto_html= json.texto_html;
            this.url= json.url;
            this.cod_actividad= json.cod_actividad;
            this.nro_nota= json.nro_nota;
            this.fecha_nota= json.fecha_nota;
            this.usuario= json.usuario;
            this.grupo= json.grupo;
            this.fecha_carga= json.fecha_carga;
            this.observaciones= json.observaciones;
            this.adjunto= json.adjunto;
            this.reemplaza= json.reemplaza;
            
            if(json.tipoDocumento){
                this.tipoDocumento = new TipoDocumento(json.tipoDocumento);
            }
            if(json.claseDocumento){
                this.claseDocumento = new ClaseDocumento(json.claseDocumento);
            }
            if(json.estado){
                this.estado = new EstadoDocumento(json.estado);
            }
        }
    }
    
    public setTipoPorCodigo(tipo){
        let tipoDoc: TipoDocumento = new TipoDocumento();
        tipoDoc.tipo_documento = tipo;
        this.tipoDocumento = tipoDoc;
    }
    public setClasePorCodigo(clase){
        let claseDoc: ClaseDocumento = new ClaseDocumento();
        claseDoc.clase_documento = clase;
        this.claseDocumento = claseDoc;
    }
}

export class ClaseDocumento{
    public clase_documento: number;
    public descripcion: string;
    public tipo_documento: number;
    public grupo_proceso: string;
    
    constructor(json?){
        if(json){
            this.clase_documento= json.clase_documento;
            this.descripcion= json.descripcion;
            this.tipo_documento= json.tipo_documento;
            this.grupo_proceso= json.grupo_proceso;
        }
    }
}

export class TipoDocumento{
    public tipo_documento: number;
    public descripcion: string;
    public grupo_proceso: string;
    
    constructor(json?){
        if(json){
            this.descripcion= json.descripcion;
            this.tipo_documento= json.tipo_documento;
            this.grupo_proceso= json.grupo_proceso;
        }
    }
}

export class EstadoDocumento{
    public estado: number;
    public descripcion: string;
    
    constructor(json?){
        if(json){
            this.descripcion= json.descripcion;
            this.estado= json.estado;
        }
    }
}