import { Component } from '@angular/core';
import { TopStoriesService } from '../Services/top-stories.service';
import { StoryItemService } from '../Services/story-item.service';

interface StoryModel {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.css'
})

export class TopStoriesComponent {

  topStoriesIds: any[] = [];
  filteredStories: any[] = [];

  constructor(private topStoriesService: TopStoriesService, private storyItemService: StoryItemService) {}

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {
    this.topStoriesService.getTopStories().subscribe(data => {
      this.topStoriesIds = data;
      //Arreglo con los IDs de los topStories
      this.filterStories();
    })
  }

  filterStories() {
    this.filteredStories = [];

    for (const storyId of this.topStoriesIds) {
      this.storyItemService.getTopStoryById(storyId).subscribe((data) => {
        this.filteredStories.push({ ...data } as StoryModel);
        //StoryItem filtrado, es decir, solo se muestran las topStories
      });
    }
  }

}
