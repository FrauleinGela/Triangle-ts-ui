import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormValidator } from './helpers';
import { TriangleFormService } from './services';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CustomFormValidator,
    TriangleFormService
  ]
})
export class SharedModule { }
