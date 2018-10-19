import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TriangleDetailComponent } from './triangle-detail.component';
import { TriangleFormService, SharedModule } from '../../../../shared';

describe('TriangleDetailComponent', () => {
  let component: TriangleDetailComponent;
  let fixture: ComponentFixture<TriangleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TriangleDetailComponent],
      providers: [TriangleFormService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('If triangle is scalene', () => {
    component.sideA = 10;
    component.sideB = 5;
    component.sideC = 7;
    component.ngOnInit();
    expect(component.triangle.equalSides).toBe(0);
  });
});
