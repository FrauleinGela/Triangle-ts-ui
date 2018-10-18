import { TestBed, async } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TriangleFormService } from './triangle-form.service';
import { CustomFormValidator } from '../helpers';

let service: TriangleFormService;
describe('TriangleFormService', () => {
  beforeEach(async(() => TestBed.configureTestingModule({
    providers: [
      TriangleFormService,
      FormBuilder,
      CustomFormValidator
    ]
  })));

  it('should be created', () => {
    service = TestBed.get(TriangleFormService);
    expect(service).toBeTruthy();
  });
});
