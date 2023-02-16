import { Component } from '@angular/core';

@Component({
  selector: 'app-all-type-of-data-binding',
  templateUrl: './all-type-of-data-binding.component.html',
  styleUrls: ['./all-type-of-data-binding.component.css']
})

//class
export class AllTypeOfDataBindingComponent {

  staticString: string = "Server 3";
  serverStatus = "No server is Currently Running!";
  textBoxMessage = "";
  buttonStatus = true;

  constructor(){
    setTimeout( () => {
      this.buttonStatus = false;
    },4000);
  }
  
  onClickMethod(){
      this.serverStatus =  this.textBoxMessage+" is Currently Running!"
  }

}
