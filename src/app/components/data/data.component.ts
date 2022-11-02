import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(public usersService:UsersService) { }
  datalist:any;
  ngOnInit(): void {
    this.datalist=this.usersService.getdata();
  }
  

}
