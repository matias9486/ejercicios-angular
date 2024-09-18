import { StateTask } from "../model/state-task";

export interface ITarea {
    id?:string;
    description: string;
    state: StateTask;
}
