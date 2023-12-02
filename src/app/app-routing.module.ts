import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { StoryItemComponent } from './story-item/story-item.component';

const routes: Routes = [
  {path: "", component: TopStoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
