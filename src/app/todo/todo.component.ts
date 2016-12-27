import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  private todoText: String;

  constructor() {}

  private addTodo(todoInput: HTMLInputElement) {
    this.todoText = todoInput.value;
    todoInput.value = null;
  }

  ngOnInit() {
  }

}
