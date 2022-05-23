import { Element } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../data.json';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  @Input() width;
  widthPx;
  avatarUrl;
  isReply = false;
  isUser = false;
  reducePixel;
  accountAvatarUrl;
  replyBoxWidth;
  constructor() { }

  ngOnInit(): void {
    this.widthPx = this.width + 'px'; 
    this.avatarUrl = "assets/" + this.comment["user"]["image"]["png"].substring(2);

    if (this.comment["user"]["username"] == 'juliusomo')
      this.isUser = true;
    
    this.reducePixel = screen.width > 630 ? 50 : 20;
    let temp = this.width - 200;
    this.replyBoxWidth = temp + 'px';
  }

  reply(){
    this.isReply = true;
    this.accountAvatarUrl = "assets/" + data["currentUser"]["image"]["png"].substring(2);
  }

  sendReply(value){
    let reply = document.getElementById(value) as HTMLInputElement;

    let request = {
      "id": value * 6,
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
    this.comment.replies.push(request);
    
    reply.innerHTML = "";
    this.isReply = false;

  }

  upVote(){
    this.comment.score += 1;
  }

  downVote(){
    this.comment.score -= 1;

  }

  createRequest(){
    let info = {
      "currentUser": {
        "image": {
          "png": data.currentUser.image.png,
        },
        "username": data.currentUser.username

      }
    }
  }
}
