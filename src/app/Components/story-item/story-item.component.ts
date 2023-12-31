import { Component, Input } from '@angular/core';
import { StoryItemService } from '../../Services/story-item.service';

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
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrl: './story-item.component.css'
})

export class StoryItemComponent {

  @Input() storyId: number = 0;

  storyItem: StoryModel = {
    by: '',
    descendants: 0,
    id: 0,
    kids: [],
    score: 0,
    time: 0,
    title: '',
    type: '',
    url: ''
  };

  constructor(private storyItemService: StoryItemService) {}

  ngOnInit(): void {
    this.getStory();
  }

  getStory(){
    this.storyItemService.getTopStoryById(this.storyId).subscribe((data) => {
      this.storyItem = { ...this.storyItem, ...data } as StoryModel;
      //Objeto con cada storyItem
    });
  }

}
