import { Component, OnInit, Input } from '@angular/core';
import { NavLinks } from '../../interfaces/nav-links';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.scss']
})
export class NavVerticalComponent implements OnInit {

  constructor() { }
  @Input() public navLinks : NavLinks[];

  ngOnInit(): void {
  }

}
