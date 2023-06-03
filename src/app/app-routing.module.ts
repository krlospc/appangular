import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/cliente/list/list.component';
import { DetalleComponent } from './components/cliente/detalle/detalle.component';

const routes: Routes = [
  {path:'prueba/main', component:MainComponent},
  {path:'cliente/list', component:ListComponent},
  {path:'cliente/detalle/:id', component:DetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
