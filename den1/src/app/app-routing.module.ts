import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { AppComponent } from './app.component';
import { ResimComponent } from './resim/resim.component';
import { DetayComponent } from './detay/detay.component';
import { SpellsComponent } from './detay/spells/spells.component';
const routes: Routes = [ { path: 'tree', component: TreeComponent },
{ path: '.', component: AppComponent },
{ path: 'resim', component: ResimComponent },
{ path: 'detay', component: DetayComponent },
{ path: 'detay/spells', component: SpellsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
