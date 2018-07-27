import {Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pager',
  templateUrl: 'pager.html'
})
export class PagerComponent implements OnChanges{
    @Input() info: any;
    @Input() actualPage: number;
    
    @Output() filter: EventEmitter<number> = new EventEmitter<number>();
    
    constructor() {
    }
    
    ngOnChanges(changes: SimpleChanges) {
        if (changes['info'] && changes['info'].currentValue != null){
            this.info.pages= [];
            for(var i = 1; i <= this.info.countOfPages; i++){
                if(i - this.info.page <= 5 && i - this.info.page >= -5){
                    this.info.pages.push(i);
                }
            }
        }
    }
    
    public filterPage(page?){
        this.filter.emit(page);
    }
}