import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  serverMessage = "";
  serverName ="";
  serverOn = false;

  onClickMethod(){
    this.serverOn = true;
    this.serverMessage = this.serverName+" Server Started Now!"
  }

}
