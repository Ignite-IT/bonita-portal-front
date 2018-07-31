export class Grupo{
    grupo: string; 
    descripcion: string;
    oficinaid: string;
    
    
    constructor(json?) {
        if(json){
            this.grupo = json.grupo;
            this.descripcion = json.descripcion;
            this.oficinaid = json.oficinaid;
        }
    }
}

export class Actividad{    
    cod_actividad: string; 
    descripcion: string;
    cod_proceso: string;
    
    
    constructor(json?) {
        if(json){
            this.cod_actividad = json.cod_actividad;
            this.descripcion = json.descripcion;
            this.cod_proceso = json.cod_proceso;
        }
    }
}
       