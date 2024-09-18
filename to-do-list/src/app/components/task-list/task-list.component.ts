import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { StateTask } from '../../model/state-task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  //Necesito un Enum para usar en la vista para poder comparar estado
  taskState = StateTask;
  
  //para vincular la lista con la vista
  public listTask: Task[] = [];
  
  //Agregado para usar servicio 
  constructor(private taskService: TaskService){}

  //Agregado para cargar tareas cuando se instancia el componente
  ngOnInit(): void {
    this.listTask = this.taskService.getAll();
  }
  
  //Agregado para finalizar tarea
  markTaskComplete(id:string):void{
    this.taskService.markTaskComplete(id);
  }

  removeTaskById(id:string):void{
    this.taskService.removeTaskById(id);
  }
}