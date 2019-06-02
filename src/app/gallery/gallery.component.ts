import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { IImage } from './image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
 
  pageTitle: string="Gallery";
  errorMessage: string;
  page: number = 1;
  pageSize: number = 8;

  gallery: IImage[] = [];

  filter(value : string) {
    if (value == 'All'){
      this._imageService.getAllArt().subscribe(gallery => {this.gallery = gallery},
        error => this.errorMessage =<any>error);
    }
    else{
      this._imageService.getArt(value).subscribe(gallery => {this.gallery = gallery},
        error => this.errorMessage =<any>error);
    }
  }
  constructor(private _imageService: ImageService){
  }


  

  ngOnInit(): void {
    this._imageService.getAllArt()
      .subscribe(gallery => {this.gallery = gallery},
        error => this.errorMessage = <any>error);
  }
}
