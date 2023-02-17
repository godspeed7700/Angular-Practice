import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  serverElements = [   // this is the array which is sending object to server-element.component.ts file
    {
      type:'server',  // this is JS way of creating Object "key", "value" pair
      name:'lala', 
      content:'just a test'
    },
    {
      type:'server5',
      name:'Bala', 
      content:'Server Running'
    }
    
  ];
  

  
}