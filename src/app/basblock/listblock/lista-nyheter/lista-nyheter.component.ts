import { Router } from '@angular/router';
import { WpApiService } from './../../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-nyheter',
  templateUrl: './lista-nyheter.component.html',
  styleUrls: ['./lista-nyheter.component.scss']
})
export class ListaNyheterComponent implements OnInit {

  nyhetslista?:any= [];
  constructor(private wpApi:WpApiService,private _router:Router) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
    })
    this.getMaindata();
  }

  getMaindata(){
    this.wpApi.getAktuelltList().subscribe(Response => {
      this.nyhetslista = Response;  
    });
  }
  goto(url:string){
    this._router.navigateByUrl(url);    
  }
}
