import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageDetailComponent } from './image-detail.component';
import { ImageService } from './image.service';
import { ImageFilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path:'gallery', component: GalleryComponent },
      { path: 'gallery/:id', component: ImageDetailComponent}
    ]),
    SharedModule,
    NgbModule
  ],
  providers: [
    ImageService,
    ImageFilterPipe
  ],
  declarations: [GalleryComponent, ImageDetailComponent, ImageFilterPipe]
})
export class GalleryModule { }
