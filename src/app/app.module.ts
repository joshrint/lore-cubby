import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent} from './home/home.component';
import { EpisodesModule } from './episodes/episodes.module';
// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
//import ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PlayersModule } from './players/players.module';
import { GalleryModule } from './gallery/gallery.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { StoryModule } from './story/story.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    EpisodesModule,
    PlayersModule,
    GalleryModule,
    StoryModule,
    NgxTwitterTimelineModule.forRoot(),
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
