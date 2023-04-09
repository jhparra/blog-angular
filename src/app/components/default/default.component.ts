import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

  public page_title: string; 

  constructor(){
    this.page_title = 'Defecto';
  }


}
