import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  posts: any = [];
  result: any = {};

  constructor(private service: HttpServiceService, private route: Router) { }

  ngOnInit() {
  }

  onLogin(uname: string, pass: string) {
    const createdata = {
      uname1: uname,
      pass1: pass
    };
    if (uname === '' || pass === '') {
      window.alert('Both fields are required');
    } else {
      this.service.doLogin(createdata).subscribe(response => {
        // this.posts.splice(0, 0, {uname1: uname, pass1: pass});
        this.result = response;
        console.log(this.result);
        if (this.result.desig === 'employee') {
            this.route.navigate(['ehome']);
            sessionStorage.setItem('uname', this.result.uname);
          } else if (this.result.desig === 'manager') {
            this.route.navigate(['mhome']);
            sessionStorage.setItem('uname', this.result.uname);
          } else if (this.result.desig === 'wrong') {
            window.alert('Wrong Credintials');
          } else {
            window.alert('Blank Credintials');
          }
      });
    }
  }

}
