import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewServer = false;
serverCreationStatus = "no server was created";
serverName: string = 'TestServer';
serverCreated = false;
servers = ['Testserver', 'Testserver2'];

userNameStatus: string = 'no username yet';
userName: string = '';
allowUserNameReset = false;

displaySecret = false;
num = 0;
clicks = [];
moreClicks = [];

constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000)

}

ngOnInit() {

}

onCreateServer() {
  this.serverCreated = true;
  this.servers.push(this.serverName)
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
}

onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

saveUsername() {
  this.userNameStatus = 'Your new username is: ' + this.userName;
  this.allowUserNameReset = true;
}

clearUsername() {
  this.userName = '';
  this.allowUserNameReset = false;
  this.userNameStatus = 'you no longer have a username';
}

onDisplayDetails() {
  // Toggle back and forth between hidden and show <p>
  if(this.displaySecret === false) {
    this.displaySecret = true;
  }
  else (this.displaySecret = false)
  // array.push iterated num
  console.log("nice push");
  this.num++;
  if (this.num <= 5) {
    this.clicks.push(this.num);
  }
  else if (this.num > 5 ) {
    this.moreClicks.push(this.num);
  }
  console.log(this.clicks.toString());
}
}
