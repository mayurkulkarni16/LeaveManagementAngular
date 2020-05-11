import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-applicationlist',
  templateUrl: './applicationlist.component.html',
  styleUrls: ['./applicationlist.component.css']
})
export class ApplicationlistComponent implements OnInit {

  leaves: any = [];

  constructor(private service: HttpServiceService) { }

  ngOnInit() {
    const uname = sessionStorage.getItem('uname');
    const createdata = {
      uname1: uname
    };
    this.service.getLeaveStatus(createdata).subscribe(response => {
      this.leaves = response;
      console.log(response);
    });
  }

}
