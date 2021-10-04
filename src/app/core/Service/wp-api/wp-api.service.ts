import { Subject } from 'rxjs';
import { Global } from './../../Models/global';
import { BaseApiService } from './../base-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WpApiService extends BaseApiService{

  constructor(Http:HttpClient, private _global:Global) {
    super("",Http);
  }

  private _currentPageDataHandler: Subject<void> = new Subject<void>();

  get currentPageDataHandler(){
    return this._currentPageDataHandler
  }

  getMeny(meny:any){
    let url:string = this._global.server + meny +"?filter[orderby]=date&order=asc";
    return this.getPosts(url);
  }

  getPersonal(catid:any){
    let url:string = this._global.server + "personal?categories="+ catid + "&filter[orderby]=date&order=asc";
    return this.getPosts(url);
  }

  getBasSidaCategory(catid:number){
    let url:string = this._global.server +"bassida?categories=" +catid + "&filter[orderby]=date&order=asc";
     console.log("getBasSidaCategory URL: " + url);
    return this.getPosts(url);
  }

  getBasSidaByNamn(catnamn:string){
    let url:string = this._global.server +"bassida?slug=" +catnamn + "&filter[orderby]=date&order=asc";
     console.log("getBasSidaCategory URL: " + url);
    return this.getPosts(url);
  }

  getPageSlug(slug:any){
    let url:string = this._global.server +"main_page?slug="+slug;
     console.log("getPageSlug URL: " + url);
    return this.getPosts(url);
  }


  postRegisterUser(formdata:any){
    let url:string = this._global.postserver +"?post_type=RegisterUser";
     console.log("getPageSlug URL: " + url);
     console.log(formdata);
    return this.doPost(url,formdata);
  }


}
