import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aloo',
  templateUrl: './aloo.component.html',
  styleUrls: ['./aloo.component.css']
})
export class AlooComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  height=300;
  width=300;
  imgSource='../assets/front.jpg';

  changeTshirtMouseEnter():void{
    this.imgSource='../assets/back.jpg';

  }
  changeTshirtMouseExit():void{
    this.imgSource='../assets/front.jpg';
  }

}
