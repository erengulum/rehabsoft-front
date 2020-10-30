import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  activeUser = {};
  username:string="deneme";

  constructor() { }

  ngOnInit(): void {
    this.username =JSON.parse(localStorage.getItem('currentUser')).username;
    //console.log("isim:",this.username);
    }

}
