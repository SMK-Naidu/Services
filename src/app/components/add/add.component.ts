import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public userService:UsersService) { }
userslist:any;
  ngOnInit(): void {
   this.userslist=this.userService.getusers(); 
  }

}
