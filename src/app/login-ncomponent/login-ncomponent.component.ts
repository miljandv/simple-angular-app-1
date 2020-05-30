import { Component, OnInit } from '@angular/core';
import { korisnik } from '../shared/korisnik.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ncomponent',
  templateUrl: './login-ncomponent.component.html'
})


export class LoginNComponentComponent implements OnInit {
  types = ['abc','edf'];
  kk:string;


  constructor(private route:Router) {
    
   }

  tren_korisnik = new korisnik('A','B',false);
   Errors:string;
  ngOnInit(): void {
    console.log(this.tren_korisnik)
  }

  niz: korisnik[]
  onSubmit(){
    console.log(this.tren_korisnik)
    this.niz = JSON.parse(localStorage.getItem("users"))
    for(let i=0;i<this.niz.length;i++){
      if(this.niz[i].ime == this.tren_korisnik.ime && this.niz[i].sifra == this.tren_korisnik.sifra){
        this.route.navigate(["/korisnici"])
      }
    }
    this.Errors = "Retardirani ste";
  }
  
  get diagnostic(){return JSON.stringify(this.tren_korisnik);}

}

