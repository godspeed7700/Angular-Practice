import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})


export class CockpitComponent implements OnInit {
  

  @Output() 
  addServerObject = new EventEmitter< {type: string, name: string, content: string} >();

  @Output() 
  addBluePrintObject = new EventEmitter <{type: string, name: string, content: string}>();

  newServerName = '';
  newServerContent = '';
  
  ngOnInit(){
  }


  onAddServer() {
    this.addServerObject.emit(
      {
        type : 'server',
        name : this.newServerName,
        content : this.newServerContent
      }
    );
  }

  onAddBlueprint() {
    this.addServerObject.emit(
      {
        type : 'blueprint',
        name : this.newServerName,
        content : this.newServerContent
      }
    );
  }
}
