import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Array<Object>;
  filter: string;

  onToggleTask(task) {
    task.state = !task.state;
  }

  removeTask(index) {
    this.list.splice(index,1);
  }

  constructor() {
    this.list = [
      {text: 'Learn Angular 2 testing',state: 0},
      {text: 'Finish Angular 2 homework',state: 0},
      {text: 'Clean bedroom',state: 1},
      {text: 'Buy gifts to children',state: 0}
    ];
    this.filter = 'all';
  }

  ngOnInit() {
  }

}
