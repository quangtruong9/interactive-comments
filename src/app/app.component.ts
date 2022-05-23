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
  commentBoxWidth;
  userAvatar;
  username;
  replyBoxWidth;
  newId;

  ngOnInit(){
    this.comments = data["comments"]
    this.commentWidth = screen.width > 630 ? 630 : 340;
    this.username = data.currentUser.username;
    this.commentBoxWidth = this.commentWidth + 'px';
    this.userAvatar = "assets" + data["currentUser"]["image"]["png"].substring(1);
    
    let temp = this.commentWidth - 200;
    this.replyBoxWidth = temp + 'px';

    let count = function(value){
      let res = 0;
      if (value.length > 0){
        res = value.length;
        for (let comment of value)
          res += count(comment.replies);
      }
      return res;
    }

    this.newId = count(this.comments);
  }

  sendReply(){
    let reply = document.getElementById("new-comment") as HTMLInputElement;
    let request = {
      "id": this.newId * 6,
      "content": reply.value,
      "createdAt": "2 weeks ago",
      "score": 0,
      "user": {
        "image": {
          "png": data.currentUser.image.png
        },
        "username": data.currentUser.username
      },
      "replies": []
    }

    this.comments.push(request);
    reply.value = "";

  }
}
