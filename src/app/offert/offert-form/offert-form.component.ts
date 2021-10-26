import { UploadfileServiceService } from './../../core/Service/upload/uploadfile-service.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-offert-form',
  templateUrl: './offert-form.component.html',
  styleUrls: ['./offert-form.component.scss']
})
export class OffertFormComponent implements OnInit {

  constructor(private upload: UploadfileServiceService, private fb: FormBuilder) { }
  
  OffertForm= this.fb.group({
    offertName: ['', Validators.required],
    offertForetag: ["Företag"],
    offertEmail: ['', [Validators.required, Validators.email]],
    offertTyp: ['', Validators.required],
    offertUnderlag: ['', Validators.required],
    offertFile: [],
    offertUpload:[]    
  });


  filnamn?:string="";
  tmpupload?:any;
  clearfile:boolean= false;


  ngOnInit() {
  }
  onChange(event:any) {
    this.filnamn ="";
    if(event.target.files[0]){
      this.filnamn = event.target.files[0].name;  
      this.OffertForm.get('offertFile')?.setValue(event.target.files[0].name);   
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
    this.OffertForm.get('offertFile')?.setValue($event.dataTransfer.files[0].name);   
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
      console.log("No file selected!");
      return

    }
    let file: File = files[0];
    this.filnamn =files[0].name;
    this.OffertForm.get('offertFile')?.setValue(files);   
console.log(files[0].name);



    // this.upload.uploadFile("/api/flash/upload", file)
    //   .subscribe(
    //     event => {
    //       if (event.type == HttpEventType.UploadProgress) {
            
    //       } else if (event instanceof HttpResponse) {
    //         console.log('File is completely loaded!');
    //       }
    //     },
    //     (err) => {
    //       console.log("Upload Error:", err);
    //     }, () => {
    //       console.log("Upload done");
    //     }
    //   )
  }

}
