import { Component, Input } from '@angular/core';
import { CommentService } from '../../Services/comment.service';
import { ActivatedRoute } from '@angular/router';


export interface CommentModel {
  by: string;
  id: number;
  kids: CommentModel[];
  parent: number;
  text: string;
  time: number;
  type: string; 
}

@Component({
  selector: 'app-comments',
  templateUrl: './commments.component.html',
  styleUrl: './commments.component.css'
})

export class CommmentsComponent {

  @Input() articleId: number = 0;
  articleComments: CommentModel[] = [];

  constructor(private commentService: CommentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
      this.loadComments();
    });
  }

  loadComments() {
    if (this.articleId) {
      this.commentService.getCommentsForArticle(this.articleId).subscribe(comments => {
        console.log(comments);
        this.articleComments = comments;
      });
    }
  }

}
