
import { Router } from '@angular/router';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://katalog.frontdata.se"; // Timmele.se
  private _devserver:string = "https://katalog.frontdata.se/wpAdmin";
  private _localdevserver:string = "http://localhost:81/takstolsfabrikenWP";
  private _wpApi:string = "/wp-json/wp/v2/";
  private _wpApiPost:string = "/wp-json/";

  userregistered:string = ""
  VisaMainNav:boolean=true;
  VisaGuideNav:boolean=false;
  currentversion:string="Version: 1.0.1 2021-10-08"

  server:string = this._localdevserver + this._wpApi;
  postserver:string = this._localdevserver + this._wpApiPost;
  devkey:string = "/devkey/alf/?type=json";

  constructor(private router: Router) {
  }

  public isEmptyObj = (obj:any) => {
    return obj === null || undefined
        ? true
        : (() => {
            for (const prop in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
              }
            }
            return true;
          })();
  };

  public deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

  public categoryMapper(name:string){
    let tmpcatlist=  this.categoryMap().find(i=> i.catname === name)
    return tmpcatlist?.catid;
  }
  public categoryMap(){
    return [
      {catid:5, catname:"/offert"},
      {catid:4, catname:"/omoss"},
      {catid:6, catname:"/tillverkning"},
      {catid:5, catname:"/bas"},     
    ]
  }
}
