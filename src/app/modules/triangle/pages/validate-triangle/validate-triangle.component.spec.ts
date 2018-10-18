import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule, TriangleFormService } from '../../../../shared';
import { ValidateTriangleComponent } from './validate-triangle.component';

@Component({
  selector: 'app-triangle-form',
  template: '<form class="triangle-form">Mock Triangle Form</form>'
})
class MockTriangleFormComponent {
  @Input() triangleForm;
  @Input() submitted;
  @Input() index;
}

describe('ValidateTriangleComponent', () => {
  let component: ValidateTriangleComponent;
  let fixture: ComponentFixture<ValidateTriangleComponent>;
  let bannerDe: DebugElement;
  let bannerEl: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        ValidateTriangleComponent,
        MockTriangleFormComponent
      ],
      providers: [
        TriangleFormService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    bannerDe = fixture.debugElement;
    bannerEl = bannerDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create triangle-form', () => {
    const appLoaderDom = bannerEl.querySelectorAll('.triangle-form');
    expect(appLoaderDom.length).toBe(1);
  });

  it('should create 2 triangle-form', () => {
    component.addItem();
    fixture.detectChanges();
    const appLoaderDom = bannerEl.querySelectorAll('.triangle-form');
    expect(appLoaderDom.length).toBe(2);
  });

  it('should remove item from triangleForm Array', () => {
    component.removeItem(0);
    fixture.detectChanges();
    const appLoaderDom = bannerEl.querySelectorAll('.triangle-form');
    expect(appLoaderDom.length).toBe(0);
  });

  it('should display only one form after removing the others', () => {
    component.addItem();
    fixture.detectChanges();
    // 2 .triangle-form
    let appLoaderDom = bannerEl.querySelectorAll('.triangle-form');
    expect(appLoaderDom.length).toBe(2);
    component.resetAll();
    fixture.detectChanges();
    appLoaderDom = bannerEl.querySelectorAll('.triangle-form');
    expect(appLoaderDom.length).toBe(1);
  });
});
