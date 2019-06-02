import { Component, OnInit } from '@angular/core';
import { IBlog } from './blog';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string='Home';
  errorMessage: string;
  searchValue: string = '';
  blogs: IBlog[] = [];
  page: number = 1;
  pageSize: number = 5;


  filter() {
    if (this.searchValue == ''){
      this._homeService.getAllBlog()
        .subscribe(blogs =>{this.blogs = blogs},
          error => this.errorMessage =<any>error);
    } else{
      this._homeService.getBlog(this.searchValue)
      .subscribe(blogs => {this.blogs = blogs},
        error => this.errorMessage =<any>error);
    }
  }
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getAllBlog()
    .subscribe(blogs => {this.blogs = blogs},
      error => this.errorMessage =<any>error);
  }

}
