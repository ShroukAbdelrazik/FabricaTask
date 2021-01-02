import { UserType } from './../../../shared/enums/user-type.enum';
import { ProfileService } from './../profile.service';

import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { CheckInputService } from '../../../shared/services/check-input.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  //#region Definitions
  user:User = new User();
  customers: User[] = [];
  retypePassword: string = '';
  hide:boolean = true;
  hideRetype:boolean = true;
  UserType:UserType;
  title: string = 'Add Profile';
  isEditing: boolean = false;
  clicked: boolean = false;
  //#endregion

  constructor(private checkInputSer:CheckInputService,
    private userSer:ProfileService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.user.userType === UserType.Admin) this.getCustomers();
    this.getRouteParams();
  }
  //#region Route Params [Check Edited id]
  getRouteParams(){
    this.activatedRoute.params.subscribe(res => {
      if(res.id){
        this.user.id = +res.id;
        this.isEditing = true;
        this.title = "Edit Profile";
        this.getUser(+res.id);
      }
    });
  }
  //#endregion

  getCustomers(){
    this.customers = [];
    this.customers = this.userSer.getUsers(UserType.Customer);
  }

  getUser(id: number){
    this.user = this.userSer.getById(id);
  }

  addUser(e){
    console.log(e)
    if(e.invalid) return;
    let result = this.userSer.addUser(this.user);
    if(!result){
      Swal.fire('Oops...', 'Something went wrong!', 'error')
      return ;
    }
    Swal.fire(  {
      title: "Saved successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 1000
    }).then(res=>{
      console.log('done');
      this.router.navigate(['/users']);

    })

  }

  onChangeType(change){
    debugger
    this.user = new User();
    if(change === UserType.Admin) this.getCustomers();

  }

  //#region Validate Input
  checkInput(e,type:any){
    this.checkInputSer.checkInput(e,type);
  }
  //#endregion
}
