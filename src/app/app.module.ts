import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './global/nav/nav.component';
import { FooterComponent } from './global/footer/footer.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MiljoComponent } from './miljo/miljo.component';
import { HemComponent } from './hem/hem.component';
import { OffertComponent } from './offert/offert.component';
import { TakstolstyperComponent } from './takstolstyper/takstolstyper.component';
import { BassidaComponent } from './bassida/bassida.component';
import { HttpClientModule } from '@angular/common/http';
import { Global } from './core/Models/global';
import { AdminComponent } from './kontakt/personal/admin/admin.component';
import { SaljComponent } from './kontakt/personal/salj/salj.component';
import { KontaktFormComponent } from './kontakt/kontakt-form/kontakt-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TakstolstyperDetaljComponent } from './takstolstyper/takstolstyper-detalj/takstolstyper-detalj.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { Err404pageComponent } from './global/err404page/err404page.component';
import { OmossComponent } from './omoss/omoss.component';
import { TillverkningComponent } from './tillverkning/tillverkning.component';
import { MainBlockComponent } from './basblock/main-block/main-block.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'// 'timmele.se' //it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#222'
    },
    button: {
      background: '#111'
    }
  },
  theme: 'classic',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}<p>
      <a aria-label="learn more about cookies" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noreferrer">{{cookiePolicyLink}}</a>
      </p></span>
    `,
  },
  content:{
    message: 'På timmele.se använder vi cookies för att ge dig en bra användarupplevelse. Vi använder google analytics som statistikverktyg för vår sida. Väljer du att Tillåta kakor/coockies på vår webplats, godkänner du att vi använder cookies, browserstorage och användning av google analytics i marknadsföringssyfte.',
 
    cookiePolicyLink: 'Läs mer om cookie/kakor',
    cookiePolicyHref: 'https://www.cookiesandyou.com/',
 
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',
 
    tosLink: 'hantering av Service',
    tosHref: 'https://www.timmele.se/cookies',
    header: 'Kakor används på denna webbplats. Cookies used on the website!',
    dismiss: 'avböj!',
    allow: 'Tillåt kakor/ cookies',
    deny: 'Avböj',
    link: 'läs mer',
    policy: 'Kakor Policy'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    KontaktComponent,
    MiljoComponent,
    HemComponent,
    OffertComponent,
    TakstolstyperComponent,
    BassidaComponent,
    AdminComponent,
    SaljComponent,
    KontaktFormComponent,
    TakstolstyperDetaljComponent,
    MainPagesComponent,
    Err404pageComponent,
    OmossComponent,
    TillverkningComponent,
    MainBlockComponent
  ],
  imports: [
    BrowserModule,  
    NgcCookieConsentModule.forRoot(cookieConfig),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
