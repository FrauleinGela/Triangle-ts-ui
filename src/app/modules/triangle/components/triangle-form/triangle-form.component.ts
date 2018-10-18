import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TriangleFormService } from '../../../../shared';


@Component({
  selector: 'app-triangle-form',
  templateUrl: './triangle-form.component.html',
  styleUrls: ['./triangle-form.component.scss']
})
export class TriangleFormComponent {
  @Input() triangleForm: FormGroup;
  @Input() submitted: boolean;
  @Input() index: any;
  isTriangle: boolean;

  constructor(
    private triangleFormService: TriangleFormService
  ) { }

  // easy access to form fields
  get fControls(): any {
    return this.triangleForm.controls;
  }

  validateTriangle() {
    this.submitted = true;
    if (this.triangleForm.valid) {
      this.isTriangle = this.triangleFormService.isTriangle(this.triangleForm);
    }
  }

  deleteForm() {
    this.triangleFormService.deleteForm(this.index);
  }
}
