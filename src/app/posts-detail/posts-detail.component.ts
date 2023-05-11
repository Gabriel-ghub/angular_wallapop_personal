import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

PostsService
@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css'],
})
export class PostsDetailComponent {
  id: any;
  post: any;
  errorMessage: any;
  isSending = false;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private rt: Router
  ) {}

  ngOnInit(): void {
    this.isSending = true;
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.getPost();
  }

  getPost() {
    this.postsService.getPost(this.id).subscribe(
      (post) => {
        this.isSending = false;
        console.log(post);
        this.post = post;
      },
      (err) => {
        this.isSending = false;
        this.errorMessage = 'Error al cargar los datos';
        console.log(err);
      }
    );
  }
}
