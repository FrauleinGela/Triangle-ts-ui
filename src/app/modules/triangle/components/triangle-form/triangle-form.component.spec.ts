import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { CustomFormValidator, TriangleFormService, Triangle } from '../../../../shared';
import { TriangleFormComponent } from './triangle-form.component';
import { Component, Input, DebugElement } from '@angular/core';

@Component({
  selector: 'app-triangle-detail',
  template: '<form class="triangle-block__detail">Mock Triangle Form</form>'
})
class MockTriangleDetailComponent {
  @Input() sideA;
  @Input() sideB;
  @Input() sideC;
  @Input() index;
}

describe('TriangleFormComponent', () => {
  let component: TriangleFormComponent;
  let fixture: ComponentFixture<TriangleFormComponent>;
  let bannerDe: DebugElement;
  let bannerEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        TriangleFormComponent,
        MockTriangleDetailComponent
      ],
      providers: [
        TriangleFormService,
        CustomFormValidator,
        SharedModule,
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleFormComponent);
    component = fixture.componentInstance;
    const triangleFormService = TestBed.get(TriangleFormService);
    component.triangleForm = triangleFormService.createItemForm();
    fixture.detectChanges();
    bannerDe = fixture.debugElement;
    bannerEl = bannerDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should contain controls sideA, sideB, sideC', () => {
    const has = Object.prototype.hasOwnProperty;
    const controls = component.triangleForm.controls;
    expect(has.call(controls, 'sideA')).toBeTruthy();
    expect(has.call(controls, 'sideB')).toBeTruthy();
    expect(has.call(controls, 'sideC')).toBeTruthy();
  });

  it('triangleForm invalid when empty', () => {
    expect(component.triangleForm.valid).toBeFalsy();
  });

  it('Error required: sideA, sideB, sideC is empty', () => {
    let errors = {};
    const sideA = component.triangleForm.controls['sideA'];
    errors = sideA.errors || {};
    expect(errors['required']).toBeTruthy();
    const sideB = component.triangleForm.controls['sideB'];
    errors = sideA.errors || {};
    expect(errors['required']).toBeTruthy();
    const sideC = component.triangleForm.controls['sideC'];
    errors = sideA.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Form valid when valid inputs', () => {
    component.triangleForm.controls['sideA'].setValue(1);
    component.triangleForm.controls['sideB'].setValue(2);
    component.triangleForm.controls['sideC'].setValue(3);
    expect(component.triangleForm.valid).toBeTruthy();
  });

  it('When result is a triangle', () => {
    component.triangleForm.controls['sideA'].setValue(7);
    component.triangleForm.controls['sideB'].setValue(10);
    component.triangleForm.controls['sideC'].setValue(5);
    component.validateTriangle();
    fixture.detectChanges();
    const appLoaderDom = bannerEl.querySelectorAll('.triangle-block__detail');
    expect(appLoaderDom.length).toBe(1);
  });
});
