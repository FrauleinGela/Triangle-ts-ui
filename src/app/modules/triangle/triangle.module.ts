import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TriangleFormComponent } from './components/triangle-form/triangle-form.component';
import { ValidateTriangleComponent } from './pages/validate-triangle/validate-triangle.component';
import { TriangleRoutingModule } from './triangle-routing.module';
import { TriangleDetailComponent } from './components/triangle-detail/triangle-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TriangleRoutingModule
  ],
  declarations: [
    ValidateTriangleComponent,
    TriangleFormComponent,
    TriangleDetailComponent
  ]
})
export class TriangleModule { }
