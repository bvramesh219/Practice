import {
    animate,
    style,
    transition,
    trigger,
    state
  } from '@angular/animations';

  export const fadeInOut = trigger('fadeInOut', [
    state(
      'void',
      style({
        opacity: 0
      })
    ),
    transition('void <=> *', animate(500))
  ]);
