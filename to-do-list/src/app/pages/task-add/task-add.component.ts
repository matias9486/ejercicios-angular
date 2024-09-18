import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../model/task';
import { StateTask } from '../../model/state-task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  @Output()
  public addTaskEvent:EventEmitter<Task> = new EventEmitter();

  //vincula tarea nueva con vista
  public task: Task = {description: '', state: StateTask.Pending};

  public emitNewTask():void{    
    this.addTaskEvent.emit(this.task);
  }
}
