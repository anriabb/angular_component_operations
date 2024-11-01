import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {

  //Interpolation
  title = "first Component!!!";

  //Property binding  
  isDisabled : boolean = true;
  imageURL : string = './src/medium.png';

  //Attribute Binding
  colspanValue: number = 2;
  ariaText: string = 'ariaLabelText!';

  //Class And Style Binding
  isActive: boolean = true;
  isSpecial: boolean = false;
  greeting: string = 'Hello';

  //Event Binding
  clickMessage: string ='';
  onClick() {
    this.clickMessage='Button Clicked!';
  }

  //Two-Way Binding
  twoWayBindingName: string = '';

  //Directives
    //*ngIf
    isTrue: boolean = false;

    //*ngFor
    stringArray: string[] = ['one', 'two', 'three'];

  //template reference variable
  tempVarValue: string = '';
  onSubmit(value: string){
      this.tempVarValue = value;
  }
  
}
