import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message-provider',
  templateUrl: './send-message-provider.component.html',
  styleUrls: ['./send-message-provider.component.scss']
})
export class SendMessageProviderComponent implements OnInit {
  inputComment = '';
  comments: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addComent() {
    if (this.inputComment.length > 0) {
      this.comments.push(this.inputComment);
      this.inputComment = '';
    }
  }

}
