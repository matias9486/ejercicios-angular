import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {
        path: 'products', children: [
            { path:'', component: ProductListComponent },            
        ]        
    },    
    {
        path:'',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
