import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  loaded = true;
  popupOpenSubscription: Subscription = new Subscription;


  constructor( @Inject(DOCUMENT) private document:any, private ccService:NgcCookieConsentService, private _router:Router){
    _router.events.pipe(filter(e => e instanceof NavigationEnd), take(1))
    .subscribe((e) => {
       localStorage.clear();
       console.log("storage is cleared");
   });
  }

  
  ngOnInit(){
    this.popupOpenSubscription= this.ccService.popupOpen$.subscribe(()=>{});

  }

  ngOnDestroy(){
    this.popupOpenSubscription.unsubscribe();
  }
  
  onActivate(event:any) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
}
}
