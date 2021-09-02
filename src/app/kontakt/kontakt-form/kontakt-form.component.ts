import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt-form',
  templateUrl: './kontakt-form.component.html',
  styleUrls: ['./kontakt-form.component.scss']
})
export class KontaktFormComponent implements OnInit {

  kontaktForm!:FormGroup;

  constructor(private _fb: FormBuilder) { 
      this.kontaktForm = this._fb.group({
      Namn: new FormControl('', [Validators.required]),
      Epost: new FormControl('', [Validators.required, Validators.email]),
      Medelande: new FormControl('', [Validators.required])
    })
    
  }
  get Namn() {
    return this.kontaktForm.get("Namn");
  }
  get Epost() {
    return this.kontaktForm.get("Epost");
  }
  get Medelande() {
    return this.kontaktForm.get("Medelande");
  }
 
  ngOnInit(): void {
  }

  skicka(){

    console.log(this.kontaktForm);
  }


}
