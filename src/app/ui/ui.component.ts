import { Component, OnInit } from '@angular/core';
import { formula } from '../formula/formula';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit{
  constructor(){}
  ngOnInit():void{}

  value1=0;
  value2=0;
  resultado=0;
  calcular(){
    let res =0;
    let form:formula=new formula();
    res=form.calcular(this.value1, this.value2);
    this.resultado=res;
  }
}
