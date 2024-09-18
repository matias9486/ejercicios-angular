import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskMainPageComponent } from "./pages/task-main-page/task-main-page.component";
import { MenuComponent } from './components/menu/menu.component';
import { TaskService } from './services/task.service';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskMainPageComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';

  //Inyecta el servicio Dbz, ya que el servicio tiene @inyectable
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
}
