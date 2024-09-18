import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../model/task';
import { StateTask } from '../../model/state-task';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  //vincula tarea nueva con vista
  public task: Task = {description: '', state: StateTask.Pending};
  
  //Agregado para usar servicios sin usar el output
  constructor(private taskService: TaskService,
    private router: Router
  ){}

  //Metodo para agregar tarea usando el servicio
  public addTarea():void{
    this.taskService.addTask(this.task);
    // utilizar el servicio Router de Angular para redirigir a la vista de la lista de tareas
    this.router.navigate(['/task-list']); 
  }
}
