import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  mainAdminData:any=[];
  devversion:string= "";

  constructor(private wpApi:WpApiService, public glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getdata();
    })
    this.getdata();
  }

  getdata(){
    this.wpApi.getPersonal("2").subscribe(Response => { // salj personal = cat 3, admin = cat 2

      this.mainAdminData = Response
      console.log(this.mainAdminData)
    });
  }
}
