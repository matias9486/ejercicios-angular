import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { StateTask } from '../model/state-task';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public listTask: Task[] = [
    {
      id: uuid(),
      description: 'Contratar plan dental. Lisa necesita frenos',
      state: StateTask.Pending
    },
    {
      id: uuid(),
      description: 'A la grande ponerle cuca',
      state: StateTask.Pending
    }
  ];
    
  constructor() { }

  addTask(task: Task): void{    
    console.log('llego al servicio add');    
    const newTask: Task = {id: uuid(), description: task.description, state: task.state};
    this.listTask.push(newTask);
  }

  // Método para modificar el atributo de una tarea por su ID
  markTaskComplete(id: string): void {
    const task = this.listTask.find(t => t.id === id);
    if (task) {      
      task.state = StateTask.Complete;      
    }
  }
  
  getAll():Task[]{
    return this.listTask;
  }

  getTaskById(id:string):Task{
    const task = this.listTask.find(t => t.id === id);
    if(task)
      return task;
    throw new Error(`No se encontró Tarea con id: ${id}`);
  }

  // Método para modificar directamente el array original eliminando el elemento por id
  removeTaskById(id: string): void {
    const index = this.listTask.findIndex(task => task.id === id);
    if (index !== -1) {
      this.listTask.splice(index, 1); // Elimina el elemento en la posición encontrada
    }
  }
}
