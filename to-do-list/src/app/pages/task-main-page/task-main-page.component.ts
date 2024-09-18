import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task';
import { StateTask } from '../../model/state-task';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-main-page',
  standalone: true,
  imports: [TaskAddComponent, TaskDetailsComponent, TaskListComponent],
  templateUrl: './task-main-page.component.html',
  styleUrl: './task-main-page.component.css'
})
export class TaskMainPageComponent {
  public task: Task = {id:'', description:'', state: StateTask.Pending};

  //Inyecta el servicio, ya que el servicio tiene @inyectable
  constructor(private taskService: TaskService){}

  //Al usar get, puedo acceder a este método como una propiedad, sin necesidad de usar ()
  //Puedo usar get cuando retorno un valor
  get tasks():Task[]{
    return this.taskService.listTask;
  }
  
  //metodo para usar el dato recibido desde componente hijo
  addTask(task: Task):void{
    console.log('llego al componente padre');
    this.taskService.addTask(task);
  }

  markTaskComplete(id:string):void{
    this.taskService.markTaskComplete(id);
  }

  getTaskDetails(id:string):void{
    this.task = this.taskService.getTaskById(id);
  }
}
