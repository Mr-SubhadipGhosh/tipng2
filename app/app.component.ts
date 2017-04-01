import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  templateUrl: 'templates/tmp.html'
})
export class AppComponent { 
  public value: string = "Angular2";
  public rs: string = "22";
  public xyz : number = 33;
  constructor() { } 
  func(){
    this.rs="55";
    alert(this.rs);
  }
  testclick(){
    alert('11');
  }
}