import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
PostsService
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent implements OnInit {
  id: any;
  post: any;
  errorMessage: string = '';
  isSending = false;
  success = false;

  constructor(
    private route: ActivatedRoute,
    private ps: PostsService,
    private rt: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getPost();
  }

  getPost() {
    this.ps.getPost(this.id).subscribe(
      (post) => {
        console.log(post);
        this.post = post;
      },
      (err) => {
        this.errorMessage = 'Error al cargar los datos';
        console.log(err);
      }
    );
  }

  handleSubmit() {
    this.isSending = true;
    if (
      this.post.title == '' ||
      this.post.description == '' ||
      this.post.price == ''
    ) {
      this.errorMessage = 'No puede enviar un campo vacío';
    }
    const formData = {
      title: this.post.title,
      description: this.post.description,
      price: this.post.price,
      id: this.id,
    };

    this.ps.updatePost(formData).subscribe(
      (response) => {
        this.isSending = false;
        this.success = true;
        setTimeout(() => {
          this.rt.navigate(['/misposts']);
        }, 2000);
      },
      (error) => {
        this.isSending = false;
        console.log(error);
      }
    );
  }
}
