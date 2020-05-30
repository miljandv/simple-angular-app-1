import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    localStorage.setItem("users",JSON.stringify(this.users))
  }

  title = 'k1n-y2019';



  users = [{ime:"A",sifra:"B",zubar:true},{ime:"A",sifra:"C",zubar:true}];
}
