import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

const routes: Routes = 
[
  {
    path: '', component: UserListComponent
  },
  {
    path: 'form', component: UserFormComponent
  },
  {
    path: 'form/:id', component: UserFormComponent
  },
  {
    path: 'todo', component: TodoListComponent
  },
  {
    path: 'pipes', component: PipesExampleComponent
  }
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule 
{ 

}
