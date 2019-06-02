import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { IImage } from './image';
import { ImageService } from './image.service';

@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  errorMessage: string;
  image: IImage;
  imgPercent = 50;
  constructor(private _imageService: ImageService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    console.log("Image Size: " + this.imgPercent)
    if(param){
      const id = +param;
      this.getImage(id);
      console.log(this.getImage(id));
    }
  }

  changeRatio(){
    switch(this.imgPercent){
      case(50):{
        this.imgPercent = 75;
        console.log(this.imgPercent);
        break;
      }
      case(75):{
        this.imgPercent = 99;
        console.log(this.imgPercent);
        break;
      }
      case(99): {
        this.imgPercent = 50;
        console.log(this.imgPercent);
        break;
      }
    }
  }

  setImageSize(){
    if (this.imgPercent == 50){
      let styles = {
        'height': '50%',
        'width': '50%',
        'cursor': 'zoom-in'
      }
      return styles;
    } else if (this.imgPercent == 75){
      let styles = {
        'height': '75%',
        'width': '75%',
        'cursor': 'zoom-in'
      }
      return styles;
    } else {
      let styles = {
        'height': '99%',
        'width': '99%',
        'cursor': 'zoom-out'
      }
      return styles;
    }
    
  }
  getImage(id: number) {
    this._imageService.getImage(id).subscribe(
      image => this.image = image,
      error => this.errorMessage = <any>error);
  }

}
