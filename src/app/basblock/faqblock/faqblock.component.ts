import * as $ from "jquery"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqblock',
  templateUrl: './faqblock.component.html',
  styleUrls: ['./faqblock.component.scss']
})
export class FaqblockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    if( jQuery(".toggle .toggle-title").hasClass('active') ){
      jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }
    jQuery(".toggle .toggle-title").on("click", (function(){
        if( jQuery(this).hasClass('active') ){
            jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
        }
        else{   jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
        }
    }));

  }

}