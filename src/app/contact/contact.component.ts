import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  musicDesc = "Our Intro and Outro music is \"Cruising for Goblins\" by Kevin MacLeod used under a Creative Commons License <br><br> Music from https://filmmusic.io: <br>\"Cruising for Goblins\" by Kevin MacLeod (https://incompetech.com) <br>Licence: CC BY (http://creativecommons.org/licenses/by/4.0/)";

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

}
