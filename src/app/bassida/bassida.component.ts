import { ViewportScroller } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Global } from './../core/Models/global';
import { WpApiService } from './../core/Service/wp-api/wp-api.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

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
  part:any;
  constructor(private wpApi:WpApiService,private activatedRoute:ActivatedRoute, private _router:Router, private glb:Global, private titleService: Title,private vc:ViewportScroller) {
  }

  ngOnInit(): void {
   // Defaults to 0 if no query param provided.
    this.part = this.activatedRoute.snapshot.queryParamMap.get(('part'));

    let tmpurl = this._router.url;
    this.titleService.setTitle(this.glb.HeadTitleMapper(tmpurl));
    //  kör denna tmpurl.split('#')[0] för att få bort alla # i urlen så att categoriid kan plockas fram
     this.currentcatID= this.glb.categoryMapper(tmpurl.split('#')[0]);
     console.log("tmp " + tmpurl.split('#')[1])
     this.getMaindata(this.currentcatID);

     if(tmpurl.split('#')[1]){
      setTimeout(() => {
        this.scroll(tmpurl.split('#')[1]);
      },1000)
     }
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
      let localstorageData:any = localStorage.getItem("siddata" + cid);
      this.htmlPageData = JSON.parse(localstorageData);
      this.SpinnerLoader = false;

    }
  }
  scroll(gotoarrId: string) {
    console.log("innehär: " + gotoarrId)
    setTimeout(() => {
     this.vc.scrollToAnchor(gotoarrId);
    },1000)
  }

}
