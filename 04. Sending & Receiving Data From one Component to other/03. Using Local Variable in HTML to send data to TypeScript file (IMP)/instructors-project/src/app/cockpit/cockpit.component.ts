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

  //newServerName = '';         we dont need both of this field because we are using
  //newServerContent = '';      Local Variable in HTML file and sending it directly as parameter in here
  //                            as a HTMLInputElement
  
  ngOnInit(){
  }
 
   // this is how you use the parameter we got From HTML file
  // for this parameter to work correctly we need to Spacify it's type which is "HTMLInputElement" 
  // otherwise we won't be able to access the "value" method which belongs to "HTMLInputElement"
  onAddServer( inputGotDirectlyFromHTML_serverName: HTMLInputElement,
               inputGotDirectlyFromHTML_serverContent: HTMLInputElement) {

    this.addServerObject.emit(
      {
        type : 'server',
        
        // to extract it's value from this parameter we have to use "value" with Dot Operator.
        name : inputGotDirectlyFromHTML_serverName.value ,
        content : inputGotDirectlyFromHTML_serverContent.value
      }
    );
  }

  
  
  
  
  onAddBlueprint( inputGotDirectlyFromHTML_serverName: HTMLInputElement, 
                  inputGotDirectlyFromHTML_serverContent: HTMLInputElement) {

    this.addServerObject.emit(
      {
        type : 'blueprint',
        name : inputGotDirectlyFromHTML_serverName.value ,
        content : inputGotDirectlyFromHTML_serverContent.value
      }
    );
  }
}
