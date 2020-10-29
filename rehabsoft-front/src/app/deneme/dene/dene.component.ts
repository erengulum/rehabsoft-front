import { Component, OnInit } from '@angular/core';
import { DenemeservisService } from 'src/app/services/componentServices/denemeservis.service';
import{User} from "../../common/user"


@Component({
  selector: 'app-dene',
  templateUrl: './dene.component.html',
  styleUrls: ['./dene.component.css']
})
export class DeneComponent implements OnInit {

  userEx:User;

  constructor(private denemeServis: DenemeservisService) { }

  ngOnInit(): void {
    this.getUser();
   
  }

  getUser():void{
    this.denemeServis.getUser().subscribe(user=>this.userEx=user);
  }
  
 

}
