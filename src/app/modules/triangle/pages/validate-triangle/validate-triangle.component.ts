import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TriangleFormService } from '../../../../shared';

@Component({
  selector: 'app-validate-triangle',
  templateUrl: './validate-triangle.component.html',
  styleUrls: ['./validate-triangle.component.scss']
})
export class ValidateTriangleComponent implements OnInit, OnDestroy {
  triangleForms: FormGroup;
  submitted = false;
  result = false;
  items: FormArray;
  destroySubject$: Subject<void> = new Subject();

  constructor(
    private triangleFormService: TriangleFormService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.triangleFormService.$updateList.pipe(takeUntil(this.destroySubject$)).subscribe((indexRemove) => {
      this.removeItem(indexRemove);
    });
  }

  initForm() {
    this.triangleForms = this.formBuilder.group({
      items: this.formBuilder.array([this.triangleFormService.createItemForm()])
    });
  }

  get fItemsArray() {
    return this.triangleForms.get('items') as FormArray;
  }

  addItem() {
    this.fItemsArray.push(this.triangleFormService.createItemForm());
  }

  removeItem(index) {
    this.fItemsArray.controls.splice(index, 1);
  }

  resetAll() {
    while (this.fItemsArray.length !== 0) {
      this.fItemsArray.removeAt(0);
    }
    this.initForm();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }
}
