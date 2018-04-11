import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { AuthService } from './auth.service';

export const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent, canActivate: [AuthService]},                    // url/about mostra a pagina about
    { path: 'cart-list' , component: CartListComponent, canActivate: [AuthService] },       // cart-list mostra o cart
    { path: 'shopping-list' , component: ShoppingListComponent, canActivate: [AuthService] },   // shopping-list mostra o list
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },  // url sem passar pagina direcionar para a padrao (list)
    { path: '**', component: ShoppingListComponent }                // qualquer url vai para o list
    ];
