import { Component, OnInit } from '@angular/core';
import { StateTask } from '../../model/state-task';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit{
  //vincula tarea con vista
  public task: Task = {id:'',description: '', state: StateTask.Pending};

  //Agregado para usar servicio
  public id!: string;

  constructor(
    private route: ActivatedRoute, // Inyecta ActivatedRoute
    private taskService : TaskService
  ){}
    
  ngOnInit(): void {    
    // Obtiene el parámetro de ruta 'id'
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Busca la tarea por id
      this.task = this.taskService.getTaskById(id);
    }    
  }  
}
