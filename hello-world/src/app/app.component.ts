  import { Component } from '@angular/core';
  import { MyserviceService } from "./myservice.service"
  import {HttpModule ,Response } from "@angular/http"
  import 'rxjs/add/operator/map'
  import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project!';

  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable=true;
  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
  }
  private apiUrl='https://address-book-demo.herokuapp.com/api/contacts';
  data: any={}
  constructor (private http: HttpClientModule){
    console.log("fellow user");


  }
  getData(this.apiUrl){

}



}
