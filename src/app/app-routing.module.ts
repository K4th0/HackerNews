import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './Components/top-stories/top-stories.component';
import { StoryItemComponent } from './Components/story-item/story-item.component';

const routes: Routes = [
  {path: "", component: TopStoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
