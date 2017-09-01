import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = '';
  displayName = '';
  userstatus= 'is offline';
  useradd = false;
  usersArray = [];
  color = '';
  constructor() {}

  ngOnInit() {
  }
  reset(){
  	this.username = '';
    this.usersArray=[];
    this.useradd = false;
  }

  addUserName(){
    this.useradd = true; 
    this.userstatus = this.getUserStatus();
    this.color = this.getColor();
    //this.displayName = [this.username,this.getUserStatus(),this.getColor()];

    this.usersArray.push({'username': this.username,'status': this.userstatus,'color': this.color});
    console.log(this.usersArray);
  }
  getUserStatus(){
     return this.userstatus = Math.random() > 0.5 ? 'is online' : 'is offline' ;
  }
  getColor(){
    return this.userstatus === 'is online' ? 'green' : 'red';
  }
}
