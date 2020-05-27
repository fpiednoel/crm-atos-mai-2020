import { Directive, Input, OnInit,OnChanges, HostBinding } from '@angular/core';
import { StateOrder } from '../enums/state-order.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit,OnChanges{

@Input() state : string;
@HostBinding('class') nomClass : string;
  constructor() {
  }

  ngOnInit(){
    this.nomClass = this.formatClass(this.state);
  }

  ngOnChanges(){
    this.nomClass = this.formatClass(this.state);
  }

  private formatClass(state : string) : string{
    return `state-${this.state.replace(/\s/g,'').toLowerCase()}`;
  }

}
