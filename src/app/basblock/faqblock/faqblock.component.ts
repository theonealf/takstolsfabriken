import { Router } from '@angular/router';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqblock',
  templateUrl: './faqblock.component.html',
  styleUrls: ['./faqblock.component.scss']
})
export class FaqblockComponent implements OnInit {

  faqLista?:any= [];
  faqCatId:number=19;
  ToggleRunOnceHandler= true;

  constructor(private wpApi:WpApiService,private _router:Router) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata();
     
    })
    this.getMaindata();   
  }

    getMaindata(){
      this.wpApi.getListaByCategory(this.faqCatId).subscribe(Response => {
        this.faqLista = Response;  
       
      });
    }
    goto(url:string){
      this._router.navigateByUrl(url);    
    }
   
    faqtoggle(val:any){     
      return (val== 'true')? 'false':'true';      
    }
  }
  