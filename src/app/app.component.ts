import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  introduction: boolean = false;
  projects: boolean = false;
  contact: boolean = false;
  content: boolean = true;
  onContentClick(content: string) {
    switch (content) {
      case 'Introduction':
        this.introduction = true;
        this.projects = false;
        this.contact = false;
        this.content = false;
        break;
      case 'Projects':
        this.introduction = false;
        this.projects = true;
        this.contact = false;
        this.content = false;
        break;
      case 'Contact':
        this.introduction = false;
        this.projects = false;
        this.contact = true;
        this.content = false;
        break;
      case 'Content':
        this.introduction = false;
        this.projects = false;
        this.contact = false;
        this.content = true;
        break;
    }
  }

  say(message) {
    alert(message);
  }
}
