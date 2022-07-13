import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Configuração de rotas das páginas e componentes, verificando o disparo no navegador antes de
//ralizar o redirecionamento para o componente courses
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',//caminho
    //caminho do import é onde está localizado o arquivo do módulo filho
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
