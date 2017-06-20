import { Component } from '@angular/core';
import { Column } from './grid/grid/column';
import { Entity } from './grid/grid/entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columns: Column[] = [{
    field: 'id',
    visible: true,
  }, {
    field: 'name',
    visible: true
  }, {
    field: 'created',
    visible: false
  }, {
    field: 'parent',
    visible: true
  }];

  formats: { [key: string]: FormatterFn<Entity> } = {
    'id': entity => '#' + entity.id,
    'name': entity => `<a href="#${entity.id}">${entity.name}</a>`,
    'created': entity => entity.created ? entity.created.toJSON() : 'n/a',
    'parent': entity => entity.parent ? entity.parent.name : 'n/a'
  };

  data: Array<Entity> = [
    new Entity(1, 'First', new Date('2017-01-01'), new Entity(0, 'Root', null, null)),
    new Entity(2, 'Second', new Date('2017-02-02'), null),
    new Entity(3, 'Third', new Date('2017-03-03'), null),
    new Entity(4, 'Fourth', null, new Entity(0, 'Root', null, null))
  ];

  test(): void {
    this.formats['id'](new Entity(null, null, null, null));
  }
}
