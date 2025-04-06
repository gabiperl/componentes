import { Routes } from '@angular/router';
import { SearchComponent } from './sections/search/search.component';
import { CartComponent } from './sections/cart/cart.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: SearchComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', redirectTo: 'home'}

];
