import { Component } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.scss'
})
export class Day2Component {
   nameInput:string='dfdf';


    flag:boolean=false;
    numId:number=0;
    onclickBtn(){
      this.flag=!this.flag;
      return this.flag;
    }
    changeNunIdTo1(){
     return this.numId=1;
    }
    changeNunIdTo0(){
      return this.numId=0;
     }
}
