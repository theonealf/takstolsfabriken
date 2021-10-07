import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listblock',
  templateUrl: './listblock.component.html',
  styleUrls: ['./listblock.component.scss']
})
export class ListblockComponent implements OnInit {

  @Input() listtyp?:any;
  @Input() requestedList?:any;
  htmlPageData:any=[];

  constructor() { }

  ngOnInit(): void {
    this.htmlPageData = this.requestedList;
  }

}
