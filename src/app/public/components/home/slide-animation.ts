import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes,
} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('next', style({})),
  state('prev', style({})),
  transition('* => next', [
    animate(
      '300ms ease-in-out',
      keyframes([
        style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(0)', opacity: 1, offset: 1.0 }),
      ])
    ),
  ]),
  transition('* => prev', [
    animate(
      '300ms ease-in-out',
      keyframes([
        style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(0)', opacity: 1, offset: 1.0 }),
      ])
    ),
  ]),
]);
