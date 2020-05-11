import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  posts: any = [];
  result: any = {};

  constructor(private service: HttpServiceService, private routr: Router, private location: Location) { }

  ngOnInit() {
    const uname = sessionStorage.getItem('uname');
    const createdata = {
      uname1 : uname
    };
    this.service.getLeaves(createdata).subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  leaveAction(leaveact, leaveid) {
    const createdata = {
      action : leaveact,
      lid : leaveid
    };
    // console.log(createdata);
    this.service.leaveAction(createdata).subscribe(response => {
        this.result = response;
        if (this.result.data === 1) {
          window.alert('Successful');
        } else {
          window.alert('Not Successful');
        }
        // this.routr.navigate(['application']);
        // this.routr.navigateByUrl('/application', { skipLocationChange: true }).then(() => {
        //   console.log(decodeURI(this.location.path()));
        //   this.routr.navigate(['application']);
        // });
        // window.location.reload();
        this.ngOnInit();
    });
  }

}
