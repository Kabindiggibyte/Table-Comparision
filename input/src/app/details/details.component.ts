import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { findIndex } from 'rxjs';

export interface PeriodicElement {
  Name: string;
  
  age: number;
  gender: string;
  state: string;
}
  
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  dataSource!:any;
  ELEMENT_DATA:PeriodicElement[] = [{ Name:'vimal', age:23, gender:'Male',state:'Tamilnadu'},{
    Name: 'kavin', age:24,gender:'male',state:'Tamilnadu'},{ Name:'vanitha', age:21, gender:'Female',state:'Karnataka'}];
  displayedColumns: any[] = ['Name', 'age', 'gender', 'state'];

  constructor()
  {
    this.dataSource = this.ELEMENT_DATA;
  }

onSubmit(myForm: NgForm){
  let front=myForm.value.name;
  
 
for( let i=0;i<this.ELEMENT_DATA.length;i++){
 let back=this.ELEMENT_DATA[i].Name;

 if(front == back){
  console.log(alert("the given value is already exist")); 
  process.exit;
  }
  else {
   continue;
  }
  
}
console.log(alert("Entered successfully"));

}






 



}





