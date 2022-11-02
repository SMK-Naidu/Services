import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private usersService:UsersService) { }
  userslist:any;
  ngOnInit(): void {
   this.userslist=this.usersService.getusers();
  }

}
