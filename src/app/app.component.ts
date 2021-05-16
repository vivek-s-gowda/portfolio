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

  onContentClick(content: string) {
    switch (content) {
      case 'Introduction':
        this.introduction = true;
        this.projects = false;
        this.contact = false;
        break;
      case 'Projects':
        this.introduction = false;
        this.projects = true;
        this.contact = false;
        break;
      case 'Contact':
        this.introduction = false;
        this.projects = false;
        this.contact = true;
        break;
    }
  }
}
