import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateTriangleComponent } from './pages/validate-triangle/validate-triangle.component';

const routes: Routes = [
  {
    path: '',
    component: ValidateTriangleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TriangleRoutingModule { }

