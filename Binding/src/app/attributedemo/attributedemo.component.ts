import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedemo',
  templateUrl: './attributedemo.component.html',
  styleUrls: ['./attributedemo.component.css']
})
export class AttributedemoComponent implements OnInit {

  constructor() { }
  c:string='yellow';
  ngOnInit(): void {
  }

}
