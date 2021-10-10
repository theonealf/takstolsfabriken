import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Global } from './../core/Models/global';
import { WpApiService } from './../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bassida',
  templateUrl: './bassida.component.html',
  styleUrls: ['./bassida.component.scss']
})
export class BassidaComponent implements OnInit {
  visapage:string="om-oss";

  htmlPageData:any=[];

  currentcatID:any=0
  SpinnerLoader = true;

  constructor(private wpApi:WpApiService, private _router:Router, private glb:Global) {
  }
 
  ngOnInit(): void {  
    
    let tmpurl = this._router.url;
        
    //  kör denna tmpurl.split('#')[0] för att få bort alla # i urlen så att categoriid kan plockas fram
     this.currentcatID= this.glb.categoryMapper(tmpurl.split('#')[0]);

     this.getMaindata(this.currentcatID);
  }

  getMaindata(cid:any){
    
    if(this.glb.isEmptyObj(localStorage.getItem("siddata" + cid ))){
      this.wpApi.getBasSidaCategory(this.currentcatID).subscribe(Response => {
        if((Object.keys(Response).length ===0)){
          this._router.navigateByUrl("/404");
        }
        this.htmlPageData = Response;             
        localStorage.setItem("siddata" +this.currentcatID, JSON.stringify(this.htmlPageData))       
        this.SpinnerLoader = false;
            
      }); 

    }else{
      let test:any = localStorage.getItem("siddata" + cid);
      this.htmlPageData = JSON.parse(test);      
      this.SpinnerLoader = false;
    }

  }
 
}
