import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, forkJoin, tap } from 'rxjs';
import { CommentModel } from '../Components/commments/commments.component';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private commentsURL = "https://hacker-news.firebaseio.com/v0/item";

  constructor(private http: HttpClient) { }

  getCommentById(commentId: number): Observable<CommentModel>{
    return this.http.get<CommentModel>(`${this.commentsURL}/${commentId}.json`);
  }

  getCommentsForArticle(articleId: number): Observable<CommentModel[]> {
    return this.http.get<any>(`${this.commentsURL}/${articleId}.json`).pipe(
      switchMap(commentData => {
        const commentIds = Array.isArray(commentData.kids) ? commentData.kids : [];

        const commentObservables: Observable<CommentModel>[] = commentIds.map((commentId: number) =>
          this.getCommentById(commentId)
        );

        return forkJoin(commentObservables);
      })
    );
  }
}
