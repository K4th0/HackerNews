import { Component, Input } from '@angular/core';
import { CommentService } from '../../Services/comment.service';

export interface CommentModel {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

@Component({
  selector: 'app-commments',
  templateUrl: './commments.component.html',
  styleUrl: './commments.component.css'
})

export class CommmentsComponent {

  @Input() articleId: number = 0;
  articleComments: CommentModel[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    if (this.articleId) {
      this.commentService.getCommentsForArticle(this.articleId).subscribe(comments => {
        this.articleComments = comments;
      });
    }
  }

}
