import { IBassida } from './../../core/interface/IBassida';
import { Global } from './../../core/Models/global';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.scss']
})
export class MainBlockComponent implements OnInit {

@Input() requestedPage?:any;

  htmlPageData:any=[];
  valPageblock:IBassida= {
    topblockval: false,
    toprubrik: "",
    topunderrubrik: "",
    textleft: false,
    rubrik: "",
    content: "",
    bild1: "",
    bild2: "",
    bildblockval: false,
    visa_4_bilder_fran_lista: 0,
    bildblock3val:false,
    visa_3_bilder_fran_lista: 0,
    textblock4val: false,
    visa_4_text_fran_lista: 0,
    listblock: false,
    visa_listblockslista: 0,
    merinfoblock: false,
    merinfo_rubrik: "",
    merinfo_text: "",
    merinfo_bild: false,
    kontaktblock: false,
    kontaktlank: false,
    offertlank: false,
    ce_block: false,
  };

  constructor(private wpApi:WpApiService, private glb:Global) { }

  ngOnInit(): void {
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getMaindata(this.requestedPage);
    })
    this.getMaindata(this.requestedPage);
  }

  getMaindata(pagedata:string){
    this.wpApi.getBasSidaByNamn(pagedata).subscribe(Response => {

      this.htmlPageData = Response
      this.initpageblock(this.htmlPageData[0]?.acf);
      console.log(this.htmlPageData)
    });
  }

  initpageblock(obj:any){

    this.valPageblock = obj;    

    console.log("testar: " +this.valPageblock?.topblockval + " - " + this.valPageblock?.bildblockval);

  }
}
