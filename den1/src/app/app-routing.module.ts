import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { AppComponent } from './app.component';
import { ResimComponent } from './resim/resim.component';
const routes: Routes = [ { path: 'tree', component: TreeComponent },
{ path: '.', component: AppComponent },
{ path: 'resim', component: ResimComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
