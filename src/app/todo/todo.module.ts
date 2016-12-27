import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListModule } from './list/list.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
