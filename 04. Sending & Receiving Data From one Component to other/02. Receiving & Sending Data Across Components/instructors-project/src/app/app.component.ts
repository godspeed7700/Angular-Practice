import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  // this is the array which is sending object to server-element.component.ts file
  serverElements = [];
  

  addServerToList(serv: {type: string, name: string , content: string} ){

      this.serverElements.push(serv);

  }

  addBluePrintToList(bluePrint: {type: string, name: string , content: string} ){

    this.serverElements.push(bluePrint);

  }
  
}
