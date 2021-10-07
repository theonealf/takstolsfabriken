import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bildblock',
  templateUrl: './bildblock.component.html',
  styleUrls: ['./bildblock.component.scss']
})
export class BildblockComponent implements OnInit {
  @Input() typ?:any;
  @Input() datat?:any;
  itmData:any=[];

  constructor() { }

  ngOnInit(): void {
    this.itmData = this.datat;
  }

}
