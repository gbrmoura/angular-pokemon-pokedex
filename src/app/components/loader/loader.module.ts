import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
