import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt-form',
  templateUrl: './kontakt-form.component.html',
  styleUrls: ['./kontakt-form.component.scss']
})
export class KontaktFormComponent implements OnInit {

  kontaktForm!:FormGroup;
  FDObj:any  = new FormData();
  inskickatForm:boolean= false;

  constructor(private wpApi:WpApiService, private _fb: FormBuilder) { 
      this.kontaktForm = this._fb.group({
      Namn: new FormControl('', [Validators.required]),
      Epost: new FormControl('', [Validators.required, Validators.email]),
      Meddelande: new FormControl('', [Validators.required])
    })
    
  }
  get Namn() {
    return this.kontaktForm.get("Namn");
  }
  get Epost() {
    return this.kontaktForm.get("Epost");
  }
  get Meddelande() {
    return this.kontaktForm.get("Meddelande");
  }
 
  ngOnInit(): void {
  }

  skicka(){
    console.log(this.kontaktForm);
  }
  submitForm(){   
    console.log("skickar");
    if (this.kontaktForm.valid) {
      console.log("är valid");
      console.log("namn: " + JSON.stringify(this.kontaktForm.get('Namn')?.value));
      this.FDObj.append( 'Namn', JSON.stringify(this.kontaktForm.get('Namn')?.value));
      this.FDObj.append( 'Epost', JSON.stringify(this.kontaktForm.get('Epost')?.value));
      this.FDObj.append( 'Meddelande', JSON.stringify(this.kontaktForm.get('Meddelande')?.value));        
      console.log(this.FDObj);
      this.wpApi.postKontaktForm(this.FDObj).subscribe(Response => {
        if((Object.keys(Response).length ===0)){
          console.log("ERROR postKontaktForm");
        }else{
          this.inskickatForm = true;              
          this.kontaktForm.reset();
        }     
            
      }); 

    } else {
      
      this.validateAllFormFields(this.kontaktForm);       
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
