import { Injectable } from '@angular/core';


@Injectable()
export class ProjectUtils {
    constructor() { 
    }

    //
    //DATES
    public parseDateTimeToUnixFormat(date: Date){
        return Math.round(date.getTime()/1000);
    }
    public parseDateTimeToFormat(date: Date): string{
        let month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        let day= date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return `${date.getFullYear()}-${month}-${day}`;
    }
    public parseDateTimeToFullFormat(date: Date): string{
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    }
    
    public parseDateToServiceFormat(dateString: string): string{
        if(dateString){
            if(dateString.length < 12){
                dateString+= " 00:00:00.000000";
            }
            let date= new Date(dateString);
            let month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let day= date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return `${date.getFullYear()}-${month}-${day}`;
        }else{
            return '';
        }
    }
    public parseDateTimeToServiceFormat(dateString: string): number{
        if(dateString){
            if(dateString.length < 12){
                dateString+= " 00:00:00.000000";
            }
            let date= new Date(dateString);
            return Math.round(date.getTime()/1000);
        }else{
            return null;
        }
    }
    
    public parseDateToInput(dateString): string{
        if(dateString){
            let date= new Date(dateString);
            let month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let day= date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return `${date.getFullYear()}-${month}-${day}`;
        }else{
            return '';
        }
    }
    
    public parseDateToLabel(dateString): string{
        if(dateString){
            let date= new Date(dateString);
            let month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let day= date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return `${day}/${month}/${date.getFullYear()}`;
        }else{
            return '';
        }
    }
    public parseDateTimeToLabel(dateString): string{
        if(dateString){
            let date= new Date(dateString);
            let month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let day= date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            let hour= date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            return `${day}/${month}/${date.getFullYear()} ${hour}:${minutes}`;
        }else{
            return '';
        }
    }
}