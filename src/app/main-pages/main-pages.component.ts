import { ActivatedRoute, Router } from '@angular/router';
import { WpApiService } from './../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Global } from '../core/Models/global';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit {

  currentSlug:any;
  mainPageData:any = [];

  constructor(private _wpApi:WpApiService, private route:ActivatedRoute, private router:Router, gbl:Global) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(prams => {

      this.currentSlug = prams.get('slug');
      this.getPageData(this.currentSlug);
      console.log(this.currentSlug);
    });
  }

  getPageData(slug:any){
    this._wpApi.getPageSlug(slug).subscribe(Response => {

      this.mainPageData= Response;
      // if((Object.keys(Response).length ===0)){
      //   this.router.navigateByUrl("/404");
      // };

    });

  }
}
