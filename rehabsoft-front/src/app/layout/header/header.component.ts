import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  activeUser = {};

  constructor() { }

  ngOnInit(): void {
    this.activeUser = JSON.parse(localStorage.getItem('currentUser'));
    //bu currentUser bilgisi localStorage'de tutulur.username ve token bilgisini ise backendde vermistik
  }


}
