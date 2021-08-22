import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kontakt-form',
  templateUrl: './kontakt-form.component.html',
  styleUrls: ['./kontakt-form.component.scss']
})
export class KontaktFormComponent implements OnInit {

  kontaktForm:FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.kontaktForm =_fb.group({
      Namn: new FormControl(),
      Epost: new FormControl(),
      Medelande: new FormControl(),
    })
    
  }

  ngOnInit(): void {
  }

  skicka(){

    console.log(this.kontaktForm);
  }
}
