import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {

  posts: any = [];

  constructor(private service: HttpServiceService) { }

  ngOnInit() {
    const uname = sessionStorage.getItem('uname');
    const createdata = {
      uname1: uname
    };
    this.service.getEmp(createdata).subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

}
