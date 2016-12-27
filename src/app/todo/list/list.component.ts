import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TodosService } from '../shared/todos.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private todoList: Todo[];
  private filter: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodosService) {
      this.route.params.subscribe(this.onFilter);
  }

  ngOnInit() {
  }

  private onFilter = (params) => {
    this.filter = params['filter'];

    if(this.filter === 'all') {
      this.todoList = this.todoService.list;
    } else {
      let f = this.filter === 'completed';
      this.todoList = this.todoService.list.filter( todo => todo.state === f );
    }
  }

}
