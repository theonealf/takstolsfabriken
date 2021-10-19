import { UploadfileServiceService } from './../../core/Service/upload/uploadfile-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-offert-form',
  templateUrl: './offert-form.component.html',
  styleUrls: ['./offert-form.component.scss']
})
export class OffertFormComponent implements OnInit {

  constructor(private upload: UploadfileServiceService) { }
  
  formGroup?: FormGroup;
  filnamn?:string="";
  tmpupload?:any;
  clearfile:boolean= false;
  ngOnInit() {
  }
  onChange(event:any) {
    this.filnamn ="";
    if(event.target.files[0]){
      this.filnamn = event.target.files[0].name;
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
      console.log("No file selected!");
      return

    }
    let file: File = files[0];
    this.filnamn =files[0].name;
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
