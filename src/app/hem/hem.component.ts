import { Title } from '@angular/platform-browser';
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
test="rub_MASKINHALLAR"
  mainPageData?:any=[
    {'acf':[] }
  ];

  constructor(private wpApi:WpApiService,private _router:Router, private glb:Global, private titleService: Title ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.glb.HeadTitleMapper("Hem"));
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    if(this.glb.isEmptyObj(localStorage.getItem("startdata"))){
      this.wpApi.getPageSlug("start-sida").subscribe(Response => {
        if((Object.keys(Response).length ===0)){
          this._router.navigateByUrl("/404");
        }
        this.mainPageData = Response;
        localStorage.setItem("startdata", JSON.stringify(this.mainPageData));
        // this.SpinnerLoader = false;

      });

    }else{
      let test:any = localStorage.getItem("startdata");
      this.mainPageData = JSON.parse(test);
      // this.SpinnerLoader = false;
    }


    // this.wpApi.getPageSlug("start-sida").subscribe(Response => {

    //   this.mainPageData = Response


    // });
  }
  goto(url:string){
    this._router.navigateByUrl(url);

  }
}
