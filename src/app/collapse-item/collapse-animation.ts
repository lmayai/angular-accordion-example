import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const CollapseAnimation = [
  trigger('openClose', [
    state('open', style({
      'max-height': '200px',
      'opacity': '1', 
      'visibility': 'visible'
    })),
    state('closed', style({
      'max-height': '0px',
      'opacity': '0', 
      'visibility': 'hidden'
    })),
    transition('open => closed', [
      animate('200ms ease-out')
    ]),
    transition('closed => open', [
      animate('200ms ease-in')
    ]),
  ])
];
