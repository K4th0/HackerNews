import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './Components/top-stories/top-stories.component';
import { CommmentsComponent } from './Components/commments/commments.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: 'top', component: TopStoriesComponent },
  { path: 'story/:id', component: CommmentsComponent },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
