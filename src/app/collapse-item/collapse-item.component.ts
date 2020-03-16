import { Component, OnInit, Input } from '@angular/core';
import { CollapseAnimation } from './collapse-animation';

@Component({
  selector: 'app-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.css'],
  animations: CollapseAnimation,
})
export class CollapseItemComponent implements OnInit {

  @Input() show: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}