import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  /*  
    * this is new Way of accessing and storing input data from HTML to TypeScript file 
      using @ViewChild

    * @ViewChild() has some changes depending on Angular version you are using 
      so, do check the changes to use it correctly
  
    * @ViewChild() requires a selector or name of Local Variable it needs to listen to.
      You can provide it inside braces of @ViewChild() like this:
          @ViewChild( ' nameOfLocalVariabeFromHTML')

    * This has Data type of "ElementRef"
      Means element reference unlike previously used Local Variable which had "HTMLInputElement"
  */
  @ViewChild( 'inputVariableForServerName' ) inputGotDirectlyFromHTML_serverName: ElementRef;
  @ViewChild( 'inputVariableForServerContent' ) inputGotDirectlyFromHTML_serverContent: ElementRef;


  
  ngOnInit(){
  }
 
  
  onAddServer() {

    this.addServerObject.emit(
      {
        type : 'server',
        
        /*
          The variable(inputGotDirectlyFromHTML_serverName & inputGotDirectlyFromHTML_serverContent) we created to store 
          the HTML Local Variable value in this file, we can extract that "ElementRef" Objects Actual value 
          using "nativeElement" and then "value" Separated by Dot Operator like this:
                  variable_name. nativeElement.value;
        */
        name : this.inputGotDirectlyFromHTML_serverName.nativeElement.value ,
        content : this.inputGotDirectlyFromHTML_serverContent.nativeElement.value
      }
    );
  }

  onAddBlueprint( ) {

    this.addServerObject.emit(
      {
        type : 'blueprint',
        name : this.inputGotDirectlyFromHTML_serverName.nativeElement.value ,
        content : this.inputGotDirectlyFromHTML_serverContent.nativeElement.value
      }
    );
  }
}
