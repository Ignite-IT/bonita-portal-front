import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[confirm-click]'
})
export class ConfirmClickDirective {
    public msg: string= "¿Está seguro?";
    
    constructor(private el: ElementRef) { }

    @Output('confirm-click') notify: EventEmitter<string> = new EventEmitter<string>()
    @Input('confirm-params') confirmParams;
    @Input('confirm-message') confirmMessage: string;

    @HostListener('click', ['$event']) click(event) {        
        if (window.confirm(this.confirmMessage)) {
            this.notify.emit(this.confirmParams); 
        }
    }
}
