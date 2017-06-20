import { Component, Input, OnInit } from '@angular/core';
import { Column } from './column';
import { Entity } from './entity';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  columns: Column[];

  @Input()
  formats: { [key: string]: FormatterFn<Entity> };

  @Input()
  data: any[];

  constructor() { }

  ngOnInit() {
  }

  visibleColumns(): Column[] {
    return this.columns.filter(column => column.visible);
  }

}
