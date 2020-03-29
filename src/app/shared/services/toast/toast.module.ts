import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastComponent } from './component/toast/toast.component';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    ToastComponent
  ]
})
export class ToastModule { }
