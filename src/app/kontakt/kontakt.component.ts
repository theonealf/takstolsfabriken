import { Global } from 'src/app/core/Models/global';
import { Router, ActivatedRoute } from '@angular/router';
import { WpApiService } from './../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  mainPageData?:any=[
    {'acf':[] }
  ];
  part:any;

  constructor(private wpApi:WpApiService,
    private activatedRoute:ActivatedRoute,
    private _router:Router, 
    private glb:Global, 
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit(): void {
    this.part = this.activatedRoute.snapshot.queryParamMap.get(('part'));

    let tmpurl = this._router.url;
    this.titleService.setTitle(this.glb.HeadTitleMapper("Kontakta oss"));
    this.metaService.updateTag(
      {
        name: "description", content: '' + this.glb.HeadMetaMapper(tmpurl)
      }
    )
    
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