export interface IBassida{
    topblockval?: boolean;
    toprubrik?: string;
    topunderrubrik?: string;
    visa_mainblock?:boolean;
    textleft?: boolean;
    rubrik?:string;
    content?: string;
    bild1?: any;
    bild2?: any;
    bildblockval?: boolean;
    visa_4_bilder_fran_lista?: number;
    bildblock3val?: boolean;
    visa_3_bilder_fran_lista?: number;
    textblock4val?: boolean;
    visa_4_text_fran_lista?: number;
    listblock?: boolean;
    visa_listblockslista?: number;
    merinfoblock?: boolean;
    merinfo_rubrik?: string;
    merinfo_text?: string;
    merinfo_bild?: false,
    visaoffertformular?:false;
    visa_faq?:false;
    kontaktblock?: boolean;
    kontaktlank?: boolean;
    offertlank?: boolean;
    ce_block?: boolean;
    style_main?: boolean;
    style_4_bilder_block?:boolean;
    style_3_bilder_block?:boolean;
    style_4_text_block?:boolean;
    style_list_block?:boolean;
    style_merinfoblock?:boolean;
}