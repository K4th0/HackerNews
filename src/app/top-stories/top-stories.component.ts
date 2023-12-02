import { Component } from '@angular/core';
import { TopStoriesService } from '../Services/top-stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.css'
})

export class TopStoriesComponent {

  data: any[] = [];

  constructor(private topStoriesService: TopStoriesService) {}

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {
    this.topStoriesService.getTopStories().subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

}
