import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TopStoriesService {

  private topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json";

  constructor( private http: HttpClient) { }

  getTopStories() {
    return this.http.get<any>(this.topStoriesURL);
  }
}
