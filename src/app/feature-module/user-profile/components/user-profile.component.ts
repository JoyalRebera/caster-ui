import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  user =JSON.parse(localStorage.getItem("userLog") || '')
  userData=''

  constructor(private profileService: UserProfileService) { }
 
  ngOnInit(): void {
    console.log(this.user)
    if (this.user){
      // this.getuser(this.user.id)
      console.log(this.user.id)

    }
   
  }

  getuser(userId: any){
    this.profileService.getUserProfile(userId).subscribe((res: any) =>
     { 
        console.log(res)},
     error=> console.log(error))
  }

}
