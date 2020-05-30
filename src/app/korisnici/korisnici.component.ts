import { Component, OnInit } from '@angular/core';
import { korisnik } from '../shared/korisnik.model';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {
  korisnici:korisnik[]
  constructor() { }



  ngOnInit(): void {
    this.korisnici = JSON.parse(localStorage.getItem("users"))
  }


}
