import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task';
import { StateTask } from '../../model/state-task';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent{
  //Necesito un Enum para usar en la vista para poder comparar estado
  taskState = StateTask;

  @Input()
  public listTask: Task[] = [];

  @Output()
  public sendIdEvent: EventEmitter<string> = new EventEmitter();

  emitTaskId(id?:string):void{
    this.sendIdEvent.emit(id);
  }

  //Para ver los detalles de la tarea
  @Output()
  public sendTaskDetailsEvent: EventEmitter<string> = new EventEmitter();

  emitTaskDetailsId(id?:string):void{
    this.sendTaskDetailsEvent.emit(id);
  }
}