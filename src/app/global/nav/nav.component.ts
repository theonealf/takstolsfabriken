import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/core/Models/global';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mainNavData:any=[];
  devversion:string= "";

  constructor(private wpApi:WpApiService, public glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getNavdata();
    })
    this.getNavdata();
  }

  getNavdata(){
    this.wpApi.getMeny("main_nav").subscribe(Response => {

      this.mainNavData = Response
      console.log(this.mainNavData)
    });
  }
}
