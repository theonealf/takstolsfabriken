import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
// declare let ga: Function;
//declare gives Angular app access to ga function
declare let gtag: Function;
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

    // _router.events.subscribe(event => {
    //   if(event instanceof NavigationEnd){

    //     console.log(event.urlAfterRedirects);
    //     gtag('config', 'G-679KYR1EX0', {'page_path': event.urlAfterRedirects});
    //     gtag('set', 'page', event.urlAfterRedirects);
    //     gtag('send', 'pageview');
    //   }
    // })


  //  _router.events.pipe(filter(e => e instanceof NavigationEnd))
  //   .subscribe((e) => {
  //     if (e instanceof NavigationEnd) {
  //       ga('set', 'page', e.urlAfterRedirects);
  //       ga('send', 'pageview');
  //     }
  //   });
  
  }

  
  ngOnInit(){
    this.popupOpenSubscription= this.ccService.popupOpen$.subscribe(()=>{});

  }

  ngOnDestroy(){
    this.popupOpenSubscription.unsubscribe();
  }
  
  onActivate(event:any) {
    //  document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
  }
  
}
