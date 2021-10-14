import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { HeaderComponent} from './header/header.component';
import { ProductlistingComponent} from './productlisting/productlisting.component';
import { ProductsComponent} from './products/products.component';
import { CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'register', component:RegisterComponent},
  {path : '', component:HeaderComponent},
  {path : 'products', component:ProductsComponent},
  {path : 'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [ LoginComponent, RegisterComponent, HeaderComponent]
