import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent implements OnInit {

  data: any = [];

  constructor(private service: HttpServiceService) { }

  ngOnInit() {
    const uname = sessionStorage.getItem('uname');
    const createdata = {
      uname1: uname
    };
    this.service.getEmp(createdata).subscribe(response => {
      this.data = response;
    });
  }

}
