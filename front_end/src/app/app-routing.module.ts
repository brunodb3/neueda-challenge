// app-routing.module.ts
//  - app routing module declaration, where we declare the main routes
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// creating the routes
const routes: Routes = [
  {
    path: 'url',
    loadChildren: '@app/url/url.module#UrlModule'
  },
  {
    path: '',
    redirectTo: 'url',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'url',
    pathMatch: 'full'
  }
];

// creating the module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
