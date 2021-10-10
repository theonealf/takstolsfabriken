import { Router } from '@angular/router';
import { Global } from './../core/Models/global';
import { WpApiService } from './../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hem',
  templateUrl: './hem.component.html',
  styleUrls: ['./hem.component.scss']
})
export class HemComponent implements OnInit {

  mainPageData?:any=[
    {'acf':[] }
  ];

  constructor(private wpApi:WpApiService,private _router:Router, private glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getPageSlug("start-sida").subscribe(Response => {

      this.mainPageData = Response
      
      
    });
  }
  goto(url:string){
    this._router.navigateByUrl(url);
    
  }
}
