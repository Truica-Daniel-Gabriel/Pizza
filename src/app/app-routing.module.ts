import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./pages/customer/customer.module').then((m) => m.CustomerModule),
  },

  {
    path:'auth',
    loadChildren: () => 
      import('./pages/auth/auth.module').then((m)=>m.AuthModule)
  },

  {
    path:'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m)=>m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
