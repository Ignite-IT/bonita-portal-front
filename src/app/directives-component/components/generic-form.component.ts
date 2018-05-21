import { Component } from '@angular/core';

//import { MessageService } from '../services/message.service';

@Component({
  moduleId: module.id,
  selector: 'generic-form',
  template: '<p>Vista Abstracta</p>'
})

export class GenericFormComponent {
    public submitted= false;
    public error= null;
    public success= null;
    public inputError: any;
    public successList= null;
    public errorList= null;
    
    public info: any= null;
    
    constructor() { 
        this.inputError=[];
    }      
//    constructor(protected messageService: MessageService) { 
//        this.inputError=[];
//    }
          
    //UTILS
    //-Wait / -Default
    public cursorWait(event?){
        if(event){
            event.preventDefault(); 
        }
        document.body.style.cursor='wait';
    }
    public cursorDefault(){
        document.body.style.cursor='auto';
    }
    
    //-Form
    protected beforeSubmit(event?){
        if(event){
            event.preventDefault(); 
        }
        this.submitted= true;        
        this.resetForm();
        this.cursorWait();
    }
    
    protected noShowSuccess(){
        this.cursorDefault();
        this.submitted= false;
    }
    protected showSuccess(rta, popUp = false){
        this.cursorDefault();
        this.submitted= false;
        this.success= rta.msj;
//        if(popUp){            
//            this.messageService.showNotification("top", "center", "success", this.success);
//        }
        this.resetFormTimeOut();
    }
    
    protected showError(err, popUp = false){
        this.cursorDefault();
        this.submitted= false;
        if(err.msj){
            this.error= err.msj;
//            if(popUp){
//                this.messageService.showNotification("top", "center", "warning", this.error);
//            }
        }
        if(err.input_error){
            this.inputError= err.input_error;
        }
        this.resetFormTimeOut();
    }
    
    protected resetFormTimeOut(){
        setTimeout(() => {
            this.success= null;
            this.error= null;
        }, 3000);
    }
    
    protected resetForm(){
        this.success= null;
        this.error= null;
        this.inputError=[];
    }
    
    //-List
    protected beforeSubmitList(event?){
        if(event){
            event.preventDefault(); 
        }       
        this.resetList();  
        this.cursorWait();
    }
    
    protected noShowSuccessList(){
        this.cursorDefault();
    }
    protected showSuccessList(rta, popUp = false){
        this.cursorDefault();
        this.successList= rta.msj;
//        if(popUp){            
//            this.messageService.showNotification("top", "center", "success", this.successList);
//        }
        this.resetListaTimeOut();
    }
    
    protected showErrorList(err, popUp = false){
        this.cursorDefault();
        if(err.msj){
            this.errorList= err.msj;
//            if(popUp){
//                this.messageService.showNotification("top", "center", "warning", this.errorList);
//            }
        }
        this.resetListaTimeOut();
    }
    
    private resetListaTimeOut(){
        setTimeout(() => {this.resetList();}, 3000);
    }
    
    private resetList(){
        this.successList= null;
        this.errorList= null;
    }
    
    //-Table List / Pager
    public assemblePager(info: any){
        this.info= info;    
        this.info.pages= [];
        for(var i = 1; i <= this.info.countOfPages; i++){
            if(i - this.info.page <= 5 && i - this.info.page >= -5){
                this.info.pages.push(i);
            }
        }
    }
}