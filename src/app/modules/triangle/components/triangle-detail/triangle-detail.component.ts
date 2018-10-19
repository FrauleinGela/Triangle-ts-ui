import { Component, Input, OnInit } from '@angular/core';
import { Triangle } from '../../../../shared/services';
import { TriangleFormService } from '../../../../shared';

@Component({
  selector: 'app-triangle-detail',
  templateUrl: './triangle-detail.component.html',
  styleUrls: ['./triangle-detail.component.scss']
})
export class TriangleDetailComponent implements OnInit {
  triangle: Triangle;

  constructor(private triangleFormService: TriangleFormService) { }
  @Input() sideA: number;
  @Input() sideB: number;
  @Input() sideC: number;
  @Input() index: number;

  ngOnInit() {
    this.triangle = new Triangle(
      this.sideA,
      this.sideB,
      this.sideC
    );
  }

  deleteBlock() {
    this.triangleFormService.deleteForm(this.index);
  }

}
