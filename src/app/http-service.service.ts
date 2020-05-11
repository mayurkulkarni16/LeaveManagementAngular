import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url = 'http://localhost:8080/LeaveManagement/';

  constructor(private http: HttpClient) { }

  doLogin(createdata) {
    return this.http.post(this.url + 'LoginServlet', JSON.stringify(createdata));
  }

  getEmp(createdata) {
    return this.http.post(this.url + 'EmpHomeServlet', JSON.stringify(createdata));
  }

  leaveApply(createdata) {
    return this.http.post(this.url + 'leaveApplyServlet', JSON.stringify(createdata));
  }

  getLeaves(createdata) {
    return this.http.post(this.url + 'ApplicationsServlet', JSON.stringify(createdata));
  }

  leaveAction(createdata) {
    return this.http.post(this.url + 'LeaveActionsServlet', JSON.stringify(createdata));
  }

  getLeaveStatus(createdata) {
    return this.http.post(this.url + 'LeaveStatusServlet', JSON.stringify(createdata));
  }
}
