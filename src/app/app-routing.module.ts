import { OmossComponent } from './omoss/omoss.component';
import { OffertComponent } from './offert/offert.component';
import { TillverkningComponent } from './tillverkning/tillverkning.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { TakstolstyperComponent } from './takstolstyper/takstolstyper.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HemComponent } from './hem/hem.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { Err404pageComponent } from './global/err404page/err404page.component';

const routerOptions: ExtraOptions = {

  enableTracing:false,
  scrollPositionRestoration:"enabled", 
  anchorScrolling: "enabled",
  scrollOffset:[10, 64],
}

const routes: Routes = [
  {path: 'hem', component: HemComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'tillverkning', component: TillverkningComponent},
  {path: 'offert', component: OffertComponent},
  {path: 'omoss', component: OmossComponent},
  {path: 'main', component: MainPagesComponent},
  {path: '404', component: Err404pageComponent},
  {path: ':slug', component: MainPagesComponent},
  {path: '', component: HemComponent},
  {path: '**', component: Err404pageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
