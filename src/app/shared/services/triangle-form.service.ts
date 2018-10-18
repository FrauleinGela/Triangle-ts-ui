import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidator } from '../helpers';
import {Subject} from 'rxjs';

@Injectable()
export class TriangleFormService {
  private deleteSource = new Subject<number>();
  public $updateList = this.deleteSource.asObservable();

  constructor(
    private formBuilder: FormBuilder,
    private customFormValidator: CustomFormValidator
  ) { }

  createItemForm(): FormGroup {
    const validators = [
      this.customFormValidator.validateTriangleSide,
      Validators.required
    ];
    return this.formBuilder.group({
      sideA: ['', validators],
      sideB: ['', validators],
      sideC: ['', validators]
    });
  }

  isTriangle(formControl) {
    let { sideA, sideB, sideC } = formControl.controls;
    sideA = Number(sideA.value);
    sideB = Number(sideB.value);
    sideC = Number(sideC.value);
    return (Math.abs(sideA - sideB) <
      sideC && sideC < sideA + sideB)
      && (Math.abs(sideA - sideC) < sideB && sideB < sideA + sideC)
      && (Math.abs(sideB - sideC) < sideA && sideA < sideB + sideC);
  }

  deleteForm(number) {
    this.deleteSource.next(number);
  }
}
