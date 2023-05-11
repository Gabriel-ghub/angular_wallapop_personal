import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent implements OnInit {
  formulario: FormGroup;
  selectedFile: any
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      title: '',
      description: '',
      category: '',
      image: '',
      price:'',
    });
  }

  ngOnInit(): void {
    this.formulario = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      titulo: '',
      descripcion: '',
      price: '',
      category_id: '',
      image: '',
    });
  }

  enviarFormulario() {
    console.log(this.selectedFile)
    const formData = new FormData();
    formData.append('title', this.formulario.get('titulo')?.value);
    formData.append('description', this.formulario.get('descripcion')?.value);
    formData.append('category', this.formulario.get('category_id')?.value);
    formData.append('price', this.formulario.get('price')?.value);
       if (this.selectedFile) {
         formData.append('image', this.selectedFile);
       }
    this.postsService.enviarFormulario(formData).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('posts');
      },
      (error) => {
        console.log(error);
        this.errorMessage = error;
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
