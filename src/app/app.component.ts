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
  pages = ['Introduction', 'Projects', 'Contact', 'Content'];
  currentPage = this.pages[3];
  counter: number = 0;

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

  swipeLeft(message, counter) {
    if (counter == 4) counter = 0;
    this.currentPage = this.pages[counter];
    this.onContentClick(this.currentPage)
    this.counter = counter + 1;
    // alert(message + ' ' + counter + ' ' + this.currentPage);
  }

  swipeRight(message, counter) {
    if (counter == -1) counter = 0;
    this.currentPage = this.pages[counter];
    this.onContentClick(this.currentPage)
    this.counter = counter - 1;
    if (this.counter == -1) counter = 0;
    // alert(message + ' ' + counter + ' ' + this.currentPage);
  }
}
