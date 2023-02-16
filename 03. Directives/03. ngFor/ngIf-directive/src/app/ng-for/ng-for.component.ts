import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  serverMessage = "";
  serverName ="";
  serverOn = false;

  listOfServers: string[] = []; 

  onClickMethod(){
    this.serverOn = true;
    this.serverMessage = this.serverName+" Server Started Now!"
    this.listOfServers.push(this.serverMessage) 
  }
}
