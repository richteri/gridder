import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule { }
