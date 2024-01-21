import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
  todo = "Do math homework";

  todolist = ['Clean the room', 'Grocery shopping', 'Do English homework', 'Study for exam', 'Do Math Homework'] 

  addToDo(newToDo: string) {
    this.todolist.push(newToDo)
  }
}
