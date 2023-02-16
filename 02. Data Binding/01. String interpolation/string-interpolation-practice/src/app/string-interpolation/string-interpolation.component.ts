import { Component } from '@angular/core';
import { timeInterval, TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})

// Class of this Component
export class StringInterpolationComponent {
  num: number = 1;
  lineYouWant: string = 'String Interpolation';
  private change: string ='test';

  //Constructor for this Class
  constructor(){
    setTimeout(() => {
      this.lineYouWant = 'Success!!'
      this.change = "Taste"
    }, 4000);
  }

  //getter Method
  getChange(){
    return this.change;
  }
}
