import { APP_INITIALIZER } from '@angular/core';
import { validateTradeshift } from './initializer';

export const INITIALIZER = [
  {
    provide: APP_INITIALIZER,
    useFactory: validateTradeshift,
    multi: true
  }
];
