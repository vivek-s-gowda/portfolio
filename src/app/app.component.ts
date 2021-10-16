import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faTwitter, faLinkedinIn,faAngular, faCss3, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  introduction: boolean = false;
  projects: boolean = false;
  contact: boolean = false;
  content: boolean = true;
  pages = ['Content', 'Introduction', 'Projects', 'Contact'];
  currentPage = this.pages[0];
  counter: number = 0;
  message: string;
  isMobile: boolean = false;
  faFacebook = faFacebook ;
  faGithub = faGithub; 
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faAngular =faAngular;
  faCss3 = faCss3;
  faJs = faJs;
  faHtml5 = faHtml5;
  

  ngOnInit() {
    console.log('the window size is:', window.innerWidth);
    this.isMobile = window.innerWidth <= 700 ? true : false;
  }

  onContentClick(content: string) {
    switch (content) {
      case 'Introduction':
        this.introduction = true;
        this.projects = false;
        this.contact = false;
        this.content = false;
        this.currentPage = this.pages[1];
        break;
      case 'Projects':
        this.introduction = false;
        this.projects = true;
        this.contact = false;
        this.content = false;
        this.currentPage = this.pages[2];
        break;
      case 'Contact':
        this.introduction = false;
        this.projects = false;
        this.contact = true;
        this.content = false;
        this.currentPage = this.pages[3];
        break;
      case 'Content':
        this.introduction = false;
        this.projects = false;
        this.contact = false;
        this.content = true;
        this.currentPage = this.pages[0];
        break;
    }
  }

  swipeLeft(message, counter) {
    if (counter == 4) counter = 0;
    this.currentPage = this.pages[counter];
    this.onContentClick(this.currentPage);
    this.counter = counter + 1;
    this.message = message + ' ' + counter + ' ' + this.currentPage;
  }

  swipeRight(message, counter) {
    if (counter == -1) counter = 3;
    this.currentPage = this.pages[counter];
    this.onContentClick(this.currentPage);
    this.counter = counter - 1;
    if (this.counter == -1) counter = 3;
    this.message = message + ' ' + counter + ' ' + this.currentPage;
  }

  
}


