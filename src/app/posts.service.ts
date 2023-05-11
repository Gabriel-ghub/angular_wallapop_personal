import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://localhost:8000/api/posts';
  private url = 'http://localhost:8000/api/';

  token: any;
  constructor(
    private http: HttpClient,
    public router: Router,
    private auth: AuthService
  ) {
    this.token = auth.getToken();
  }

  index() {
    return this.http.get<any[]>(this.apiUrl);
  }

  indexByUser() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get<any[]>(`${this.url}posts/user`, httpOptions);
  }

  enviarFormulario(formData: any) {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:8000/api/posts/addpost';

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      }),
    };

    console.log(formData);
    return this.http.post<any>(url, formData, httpOptions);
  }

  getPost(id: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    });

    // Realizar la solicitud GET con el parámetro de ID y las cabeceras de autenticación
    return this.http.get(`${this.url}post/${id}`);
  }


  updatePost(formData: any) {
    console.log(formData);

    const token = localStorage.getItem('token');
    const url = 'http://localhost:8000/api/post/update';

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };

    return this.http.post<any>(url, formData, httpOptions);
  }

  destroy(id: any) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };
    return this.http.delete(`${this.url}posts/destroy/${id}`, httpOptions);
  }
}
