import { Paging } from './../../../shared/models/paging';
import { UserType } from './../../../shared/enums/user-type.enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { ProfileService } from '../profile.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  //#region Definitions
  users: User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'email', 'appliedDate', 'userType', 'isActive'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultLength: number = 0;
  pageEvent: PageEvent;
  paging: Paging = {pageSize: 10,pageNo: 0};

  //#endregion

  constructor(private userSer:ProfileService) {
    this.getUsers();
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    let result = this.userSer.getAll(null,this.paging);
    this.users = result.data;
    this.dataSource = new MatTableDataSource(this.users);
    this.resultLength = result.count;
  }

  bindUserTypeKey(data) {
    return UserType[data];
  }

  getPagingData(page?:PageEvent){
    this.paging.pageNo = page.pageIndex;
    this.paging.pageSize = page.pageSize ;
    this.getUsers();
  }
}
