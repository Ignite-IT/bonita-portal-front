import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
    transform(dateString: string) {
        if(dateString){
            let date= new Date(dateString);
            let month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let day= date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return `${day}/${month}/${date.getFullYear()}`;
        }else{
            return '';
        }
    }
}