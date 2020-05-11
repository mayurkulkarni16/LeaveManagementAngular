import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  reply: any;

  constructor(private service: HttpServiceService, private route: Router) { }

  ngOnInit() {
  }

  leaveApply(date1 , date2) {
    const uname1 = sessionStorage.getItem('uname');
    if (date1 === '' || date2 === '') {
      window.alert('Both values required');
    } else {
      const createdata = {
        uname: uname1,
        dfrom: date1,
        dto: date2
      };
      this.service.leaveApply(createdata).subscribe(response => {
        this.reply = response;
        if (this.reply.result === 1) {
          window.alert('Applied Successfully');
        } else if (this.reply.result === -1) {
          window.alert('Start date must be smaller than end date');
        } else if (this.reply.result === 2) {
          window.alert('Not enough leaves');
        } else {
          window.alert('Error while applying. Please try again');
        }
      });
    }
  }
}
