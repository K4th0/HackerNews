import { Component } from '@angular/core';
import { TopStoriesService } from '../Services/top-stories.service';
import { StoryItemService } from '../Services/story-item.service';

interface TopStoryModel {
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
  pageSize: number = 50;
  currentPage: number = 1;

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
  
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
  
    for (let i = startIndex; i < endIndex && i < this.topStoriesIds.length; i++) {
      const storyId = this.topStoriesIds[i];
      
      this.storyItemService.getTopStoryById(storyId).subscribe((data) => {
        this.filteredStories.push({ ...data } as TopStoryModel);
      });
    }
  }

  changePage(offset: number) {
    this.currentPage += offset;
    this.filterStories();
  }

}
