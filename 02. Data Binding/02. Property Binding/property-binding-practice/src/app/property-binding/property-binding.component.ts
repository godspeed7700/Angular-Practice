import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})

// Class associated with this Controller
export class PropertyBindingComponent {

  buttonCondition = true;

  constructor(){
    setTimeout( () => {
      this.buttonCondition = false;
    },5000)
  }

}
