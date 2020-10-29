import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import { catchError, retry,map } from 'rxjs/operators';
import{User} from "../../common/user"
import { HttpHeaders, HttpClient, HttpParams,HttpClientModule } from '@angular/common/http';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DenemeservisService {


  constructor(private apiService: ApiService,private http:HttpClient ){
  }



  getUser() : Observable<User>{
    return this.apiService.get("/users/1")
    .pipe(map(resp => {
      return resp;
    }));
  }

}
