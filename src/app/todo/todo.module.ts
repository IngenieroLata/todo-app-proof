import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo.component';

import { TodosService } from './shared/todos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoComponent, ListComponent],
  providers: [TodosService]
})
export class TodoModule { }
