import { Component, OnInit } from '@angular/core';
import * as data from '../../data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interactive-comments';
  comments: any;
  commentWidth;

  ngOnInit(){
    this.comments = data["comments"]
    this.commentWidth = screen.width > 630 ? 630 : 340;
    console.log(this.commentWidth)
  }
}
