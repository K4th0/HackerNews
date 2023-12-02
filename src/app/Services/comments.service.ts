import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsURL = "https://hacker-news.firebaseio.com/v0/item";

  constructor(private http: HttpClient) { }

  getTopStoryById(commentId: number) {
    return this.http.get(`${this.commentsURL}/${commentId}.json`);
  }

}
