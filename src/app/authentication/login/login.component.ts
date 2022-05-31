import { Router } from '@angular/router';
import { LoginInterface } from './loginInterface';
import { AuthenticatonService } from '../login-services/authenticaton.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginBackgroundImage: string = '../../../assets/images/heading_group.png'
  brandImage: string = '../../../assets/images/success_logo.svg'

  constructor(private LoginService: AuthenticatonService,
    private loginForm: FormBuilder,private router: Router) { }

  userlogin = this.loginForm.group({
    username: [''],
    password: [''],
    keeplogin: [''],
    device_id: ['device2']
  })
  ngOnInit(): void {

    localStorage.removeItem('userLog')
  }

  loginSubmit(userlogin: LoginInterface) {
    console.log(userlogin)
    this.LoginService.loginUser(userlogin).subscribe((res: any) => {
     
        const loginData = res.data
        localStorage.setItem("userLog",JSON.stringify(res.data))
        this.router.navigate(['/'])
      
    })
  }
}

