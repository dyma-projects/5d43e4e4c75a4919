import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
 public textInput : string;
 public class1 = "btnStyle";
  constructor() { 
    this.textInput="Test input"
  }
  ngOnInit() {
  }
  testClick(){
    console.log("Vous avez cliqué sur le bouton!");
  }

}
