import { UserType } from './../../shared/enums/user-type.enum';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Paging } from 'src/app/shared/models/paging';

const customers: User[] =[];
let users: User[] =[];
@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  constructor(){}

  addUser(user: User){
    if(localStorage.getItem('users')){
      users = JSON.parse(localStorage.getItem('users')) ;
    }
    // set static id
    user.id = users.length > 0 ? users.length + 1 : 1 ;
    user.appliedDate = new Date();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  getUsers(filter?: number){
    users = [];
    const userArr = [...this.dealWithStorage()];

    if(filter == UserType.Admin || filter == UserType.Customer){
      users = userArr . filter(a=> a.userType === filter);
    }
    return users;
  }

  getAll(filter?: number, page?: Paging){
    let userArr = this.getUsers(filter);
    let result = { count: userArr.length, data: userArr.splice(page.pageNo * page.pageSize, page.pageSize)};
    return result;
  }

  getById(id: number){
    return this.dealWithStorage().find(e => e.id === id);
  }

  dealWithStorage(){
    if(localStorage.getItem('users')){
      users = [];
      users = JSON.parse(localStorage.getItem('users'));
    }
    else{
      localStorage.setItem('users', JSON.stringify(users));
    }
    return users;
  }
}
