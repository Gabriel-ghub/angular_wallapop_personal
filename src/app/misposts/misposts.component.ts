import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-misposts',
  templateUrl: './misposts.component.html',
  styleUrls: ['./misposts.component.css'],
})
export class MispostsComponent {
  posts: any;
  isDeleting = false;
  deletingNumber = '';
  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {
    this.posts = [];
  }

  ngOnInit() {
    this.postsService.indexByUser().subscribe(
      (posts) => {
        console.log(posts);
        this.posts = posts;
      },
      (err) => console.log(err)
    );
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  deletePost(id: any) {
    console.log(id);
    this.isDeleting = true;
    this.deletingNumber = id;
    this.postsService.destroy(id).subscribe(
      (response) => {
        this.deletingNumber = '';
        this.isDeleting = false;
        console.log(response);
        this.posts = this.posts.filter((ob: any) => ob.id != id);
      },
      (error) => {
        this.deletingNumber = '';
        this.isDeleting = false;
        console.log(error);
      }
    );
  }
}
