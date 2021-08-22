import { KontaktComponent } from './kontakt/kontakt.component';
import { HemComponent } from './hem/hem.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {

  enableTracing:true,
  scrollPositionRestoration:"enabled",
  anchorScrolling: "enabled",
  scrollOffset:[10, 64],
}

const routes: Routes = [
  {path: 'hem', component: HemComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: '', component: HemComponent},
  {path: '**', component: HemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
