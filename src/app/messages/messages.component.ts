import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    // this.messageService.dataStream.subscribe(message => {
    //   const snackBarRef = this.snackBar.open(message, '', {
    //     duration: 3000
    //   });
    // });
  }

}
