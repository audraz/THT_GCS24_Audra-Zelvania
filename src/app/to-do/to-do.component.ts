import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  @Input() ToDoList = "Clean the room";
  @Output() newToDo = new EventEmitter<string>();

  addNewToDo(value: string){
    this.newToDo.emit(value);
  }
}
