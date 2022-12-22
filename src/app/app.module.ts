import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubService } from './service/github.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoaderComponent } from './loader/loader.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserRepoComponent } from './user-repo/user-repo.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from "./footer/footer.component";



@NgModule({
    declarations: [
        AppComponent,
        UserSearchComponent,
        UserDetailsComponent,
        LoaderComponent,
        UserReposComponent,
        UserRepoComponent,
        ErrorComponent,
        FooterComponent

    ],

    providers: [GithubService],

    bootstrap: [AppComponent],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
    ]
})
export class AppModule { }
