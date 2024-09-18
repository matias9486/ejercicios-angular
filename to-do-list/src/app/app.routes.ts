import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskMainPageComponent } from './pages/task-main-page/task-main-page.component';

export const routes: Routes = [    
    {
        path: 'tasks', children: [
            { path:'', component: TaskListComponent },
            { path:'add', component: TaskAddComponent },
            { path:'details/:id', component: TaskDetailsComponent },
        ]        
    },
    {
        path: 'task-page',
        component: TaskMainPageComponent        
    },
    {
        path:'',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: '/tasks',
        pathMatch: 'full'
    }
];
