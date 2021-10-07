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

blockid:any=0;

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
    style_main: false,
    style_4_bilder_block: false,
    style_4_text_block:false,
    style_3_bilder_block:false,
    style_list_block:false,
    style_merinfoblock:false
  };

  constructor() { 
   
  }

  ngOnInit(): void {
    this.blockid= this.requestedPage.id;
    this.valPageblock = this.requestedPage.acf;
    // this.wpApi.currentPageDataHandler.subscribe(()=>{
    //   this.getMaindatabyID(this.requestedPage);
    // })
    // this.getMaindatabyID(this.requestedPage);
  }

  stylehandler(visa:any){
    if(visa){
      return "bg-gray";
    } else {
      return "";
    };    
  }

  // getMaindatabyID(pagedataID:number){
  //   this.wpApi.getBasSidaByID(pagedataID).subscribe(Response => {

  //     this.htmlPageData = Response
  //     this.initpageblock(this.htmlPageData?.acf);
  //     console.log(this.htmlPageData)
  //   });
  // }
  // getMaindata(pagedata:string){
  //   this.wpApi.getBasSidaByNamn(pagedata).subscribe(Response => {

  //     this.htmlPageData = Response
  //     this.initpageblock(this.htmlPageData[0]?.acf);
  //     console.log(this.htmlPageData)
  //   });
  // }

  // initpageblock(obj:any){

  //   this.valPageblock = obj;    

  //   console.log("testar: " +this.valPageblock?.topblockval + " - " + this.valPageblock?.bildblockval);

  // }
}
