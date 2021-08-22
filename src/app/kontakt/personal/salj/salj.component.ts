import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-salj',
  templateUrl: './salj.component.html',
  styleUrls: ['./salj.component.scss']
})
export class SaljComponent implements OnInit {

  mainSaljData:any=[];
  devversion:string= "";

  constructor(private wpApi:WpApiService, public glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getdata();
    })
    this.getdata();
  }

  getdata(){
    this.wpApi.getPersonal("3").subscribe(Response => { // salj personal = cat 3, admin = cat 2

      this.mainSaljData = Response
      console.log(this.mainSaljData)
    });
  }
}
