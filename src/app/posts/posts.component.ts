import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any;;
  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {
    this.posts = [];
  }

  ngOnInit() {
    this.postsService.index().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  newPost() {
    this.router.navigate(['/create']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
