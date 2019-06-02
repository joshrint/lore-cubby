import { Component } from '@angular/core';
import { PlayerService } from './players/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent {
  pageTitle = 'Lore Cubby';
}
