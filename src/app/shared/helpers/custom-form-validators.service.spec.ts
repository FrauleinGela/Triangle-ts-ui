import { TestBed } from '@angular/core/testing';
import { CustomFormValidator } from './custom-form-validators.service';
import { FormControl } from '@angular/forms';

describe('CustomFormValidator', () => {
  let service: CustomFormValidator;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomFormValidator]
    })
    service = TestBed.get(CustomFormValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return invalidState if negative number', () => {
    const control = new FormControl(-5);
    const validation = service.validateTriangleSide(control)
    expect(validation).toEqual({ invalidSide: true })
  });

  it('should return true if positive number and greater than 0', () => {
    const control = new FormControl(1);
    const validation = service.validateTriangleSide(control)
    expect(validation).toEqual(true)
  });
});
