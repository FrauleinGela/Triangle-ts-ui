import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * Custom Validators, it is possible to add more validators
 */
@Injectable()
export class CustomFormValidator {
  constructor() { }
  /**
   * Validates if it's a a positive number and at the same time greater than 0
   */
  validateTriangleSide(input: FormControl) {
    return input.value > 0 || { invalidSide: true };
  }
}
