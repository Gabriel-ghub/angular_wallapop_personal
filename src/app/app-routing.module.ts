import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { FormPostComponent } from './form-post/form-postcomponent';
import { FormUpdateComponent } from './form-update/form-update.component';
import { MispostsComponent } from './misposts/misposts.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'create',
    component: FormPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'misposts',
    component: MispostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:id',
    component: FormUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post/:id',
    component: PostsDetailComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
