import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormPostComponent } from './form-post/form-postcomponent';
import { FormUpdateComponent } from './form-update/form-update.component';
import { PostsComponent } from './posts/posts.component';
import { MispostsComponent } from './misposts/misposts.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NavbarComponent,
    HomeComponent,
    FormPostComponent,
    FormUpdateComponent,
    PostsComponent,
    MispostsComponent,
    PostsDetailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
