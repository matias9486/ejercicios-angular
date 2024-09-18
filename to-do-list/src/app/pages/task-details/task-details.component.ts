import { Component, Input } from '@angular/core';
import { StateTask } from '../../model/state-task';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent{ //implements OnInit{
//vincula tarea con vista
  @Input()
  public task: Task = {id:'',description: '', state: StateTask.Pending};
}
