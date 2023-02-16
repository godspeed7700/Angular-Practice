import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})

//class
export class EventBindingComponent {

  displayString = "This will Naver Change!";

  onButtonClick(){
    return this.displayString = "Nothing is Impossible. Just Work Hard!";
  }

  onStringInput( event: Event){

    this.displayString = ( <HTMLInputElement >event.target).value;
  }

}

