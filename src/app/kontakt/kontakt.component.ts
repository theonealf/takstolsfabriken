import { Global } from 'src/app/core/Models/global';
import { Router } from '@angular/router';
import { WpApiService } from './../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  mainPageData?:any=[
    {'acf':[] }
  ];

  constructor(private wpApi:WpApiService,private _router:Router, private glb:Global, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.glb.HeadTitleMapper("Kontakta oss"));
    
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
    
  }

  getMaindata(){
    
    if(this.glb.isEmptyObj(localStorage.getItem("kontaktdata"))){
      this.wpApi.getKontaktPageSlug("kontakta-oss").subscribe(Response => {
        if((Object.keys(Response).length ===0)){
          this._router.navigateByUrl("/404");
        }
        this.mainPageData = Response;           
        localStorage.setItem("kontaktdata", JSON.stringify(this.mainPageData));    
        // this.SpinnerLoader = false;
            
      }); 

    }else{
      let test:any = localStorage.getItem("kontaktdata");
      this.mainPageData = JSON.parse(test);      
      // this.SpinnerLoader = false;
    }

  }
  goto(url:string){
    this._router.navigateByUrl(url);
    
  }
}