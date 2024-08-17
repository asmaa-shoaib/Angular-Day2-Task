import { Component } from '@angular/core';

@Component({
  selector: 'app-day2-task',
  templateUrl: './day2-task.component.html',
  styleUrl: './day2-task.component.scss'
})
export class Day2TaskComponent {
  username:string='';
  ListOfUserName:string[]=['defualt user'];
  flag:boolean=false;
  count : number=0;
  listOfStyle={

  }
  listOfClass:string[]=[]

  AddUserName(username:string){
    this.ListOfUserName.push(username);
    this.username='';
  }
  lengthOfUsername(){
      return (this.username.trim()).length;
  }
  Display(){
    this.count++;
    if(this.count==5){
      this.listOfClass=['bg-info']
      this.listOfStyle={ 'color':'white'}
    }
    else if(this.count>5){
      this.count=0;
    }
    else{
      this.listOfClass=[]
      this.listOfStyle={}
    }
    return this.flag=!this.flag;
  }

}
