import { ITarea } from '../interfaces/task.interface';
import { StateTask } from './state-task';
export class Task implements ITarea{

    constructor(        
        public description:string, 
        public state:StateTask,
        public id?:string, 
    ){}
}
