import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  
  ngOnInit() {
  }

 @Input('displayElement') element: {    // by putting @input, we are making this object accessable to other components 
    type: string ,      //this object Receives values from app.component.ts
    name: string ,     //we can assign Alias to access "element" by putting Alias name in @input()
    content: string 
  }; 

}
