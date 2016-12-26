import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todo/all', pathMatch: 'full' },
  { path: 'todo/:filter', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
