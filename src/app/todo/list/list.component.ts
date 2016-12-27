import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TodosService } from '../shared/todos.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges{
  @Input() todo: string;
  private todoList: Todo[];
  private filter: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodosService) {
      this.route.params.subscribe(this.onFilter);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    let todo = changes['todo'].currentValue
    if(todo) {
      this.todoService.addTodo(new Todo( todo ));
    }
  }

  ngOnInit() {
  }

  private onFilter = (params) => {
    this.filter = params['filter'];

    this.filterList();
  }

  private removeTask(todo) {
    this.todoService.removeTask(todo);
    this.filterList();
  }

  private taskChange(todo, state) {
    todo.state = state;

    this.filterList();
  }

  private filterList() {
    if(this.filter === 'all') {
      this.todoList = this.todoService.list;
    } else {
      let f = this.filter === 'completed';
      this.todoList = this.todoService.list.filter( todo => todo.state === f );
    }
  }
}

