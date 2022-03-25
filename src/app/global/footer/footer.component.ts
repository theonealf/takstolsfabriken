import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Global } from 'src/app/core/Models/global';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  mainNavData:any=[];
  constructor(private wpApi:WpApiService, public glb:Global, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    // this.wpApi.currentPageDataHandler.subscribe(()=>{
    //   this.getNavdata();
    // })
    // this.getNavdata();
  }

  getNavdata(){
    this.wpApi.getMeny("main_nav").subscribe(Response => {

      this.mainNavData = Response
      console.log(this.mainNavData)
    });
  }

  onClickScroll(Elementid:string){
    this.viewportScroller.scrollToAnchor(Elementid);
  
    return false;
  }
}
