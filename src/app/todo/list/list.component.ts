import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Array<Object>;
  filter: string;

  onToggleTask(state) {
    return !state;
  }

  private removeTask(index) {
    this.list.splice(index,1);
  }

  constructor() {
    this.list = [
      {text: 'Learn Angular 2 testing',state: false},
      {text: 'Finish Angular 2 homework',state: false},
      {text: 'Clean bedroom',state: true},
      {text: 'Buy gifts to children',state: false}
    ]; 
    this.filter = 'all';
  }

  ngOnInit() {
  }

}
