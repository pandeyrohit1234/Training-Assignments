import { Component, OnInit } from '@angular/core';
import { MyerrorhandlerService } from '../myerrorhandler.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private MyerrorhandlerService : MyerrorhandlerService) { }
  a = undefined;

  ngOnInit(): void {
  }

  generate(): void{
    this.a.sort();
  }
}
