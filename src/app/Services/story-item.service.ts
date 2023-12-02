import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryItemService {

  private storiesItemsURL = "https://hacker-news.firebaseio.com/v0/item";

  constructor(private http: HttpClient) { }

  getTopStoryById(storyId: number) {
    return this.http.get(`${this.storiesItemsURL}/${storyId}.json`);
  }

}
