import { Global } from './../../core/Models/global';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as FormData from 'form-data'; 
@Component({
  selector: 'app-offert-form',
  templateUrl: './offert-form.component.html',
  styleUrls: ['./offert-form.component.scss']
})
export class OffertFormComponent implements OnInit {
  
  OffertForm:FormGroup;

  constructor(private wpApi:WpApiService, private glb:Global,  private fb: FormBuilder) { 
  
    this.OffertForm= this.fb.group({
      offertName: ['', Validators.required],
      offertForetag: ["Företag"],
      offertEmail: ['', [Validators.required, Validators.email]],
      offertTyp: ['', Validators.required],
      offertUnderlag: ['', Validators.required],
      offertFile: [],
      offertUpload:[]    
    });
  }
  FDObj:any  = new FormData();

  filnamn?:string="";
  tmpupload?:any;
  clearfile:boolean= false;
  inskickatForm:boolean= false;
 
  ngOnInit() {
  }
  onChange(event:any) {
    this.filnamn ="";
    if(event.target.files[0]){
      this.filnamn = event.target.files[0].name;  
      this.OffertForm.get('offertFile')?.setValue(event.target.files[0]);   
      this.uploadFile(event.target.files);
      console.log("välj");
      this.clearfile= true;
    }    
  }
  onRemove(event:any) {
    this.filnamn ="";   
    this.clearfile= false; 
  }
  // At the drag drop area
  // (drop)="onDropFile($event)"
  onDropFile($event:any) {
    $event.preventDefault();
    this.uploadFile($event.dataTransfer.files);
    
  }

  // At the drag drop area
  // (dragover)="onDragOverFile($event)"
  onDragOverFile(event:any) {
    event.stopPropagation();
    event.preventDefault();
  }

  // At the file input element
  // (change)="selectFile($event)"
  selectFile(event:any) {
    this.uploadFile(event.target.files);
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      // console.log("No file selected!");
      return;
    };
    // console.log("ladda fil");
    let file: File = files[0];
    this.filnamn =files[0].name;
    this.OffertForm.get('offertFile')?.setValue(files[0]);
    
  }

  submitForm(){   
    
    if (this.OffertForm.valid) {
      this.FDObj.append( 'offertName', JSON.stringify(this.OffertForm.get('offertName')?.value));
      this.FDObj.append( 'offertForetag', JSON.stringify(this.OffertForm.get('offertForetag')?.value));
      this.FDObj.append( 'offertEmail', JSON.stringify(this.OffertForm.get('offertEmail')?.value));
      this.FDObj.append( 'offertTyp', JSON.stringify(this.OffertForm.get('offertTyp')?.value));
      this.FDObj.append( 'offertUnderlag', JSON.stringify(this.OffertForm.get('offertUnderlag')?.value));
     
      this.FDObj.append( "offertFiles" , this.OffertForm.get('offertFile')?.value);
    
      this.wpApi.postOffertForm(this.FDObj).subscribe(Response => {
        if((Object.keys(Response).length ===0)){
          console.log("ERROR postOffertForm");
        }else{
          this.inskickatForm = true;    
          this.clearfile= false;  
          this.OffertForm.reset();
        }     
            
      }); 

    } else {
      
      this.validateAllFormFields(this.OffertForm);       
      this.inskickatForm = false;
    } 

  }

  validateAllFormFields(formGroup: FormGroup) {         //{1} Kolla så att alla fält i formuläret är valida 
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  fadeout(){
    
    this.inskickatForm = false;
  }
}
