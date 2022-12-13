import { Component } from '@angular/core';
export interface PeriodicElement {
  Name: string;
  
  age: number;
  gender: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [{Name:'kavin', age:23, gender:'Male',state:'Tamilnadu'}
 
];
 


@Component({
  selector: 'app-tablepage',
  templateUrl: './tablepage.component.html',
  styleUrls: ['./tablepage.component.css']
})
export class TablepageComponent {
  displayedColumns: string[] = ['Name', 'age', 'gender', 'state'];
  dataSource = ELEMENT_DATA;
 



}
