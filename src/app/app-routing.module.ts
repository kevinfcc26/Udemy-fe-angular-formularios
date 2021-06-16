import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';


const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'reactivo', component: ReactiveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactivo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
