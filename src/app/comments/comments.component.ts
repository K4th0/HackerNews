import { Component, Input } from '@angular/core';

interface CommentModel {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})

export class CommentsComponent {

  @Input() comments: CommentModel[] = [];

  getReplies(parentId: number): CommentModel[] {
    return this.comments.filter((comment) => comment.parent === parentId);
  }

}
