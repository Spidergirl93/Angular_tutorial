import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerMsg: string = 'This server is being created';
  serverName: string = 'Helo'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.createServerMsg = 'server is created and the name is ' + this.serverName;
  }

}
