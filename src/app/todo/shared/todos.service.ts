import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodosService {
  public list: Todo[];

  constructor() {
    this.list = [
      new Todo('Learn Angular 2 testing', false),
      new Todo('Finish Angular 2 homework', false),
      new Todo('Clean bedroom', true),
      new Todo('Buy gifts to children', false)
    ];
  }

  toggleState(todo: Todo) {
    todo.toggleTask();
  }

  removeTask(todoIndex: number) {
    this.list.splice(todoIndex, 1);
  }

}
