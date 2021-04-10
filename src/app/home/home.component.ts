import {Component, OnInit} from '@angular/core';

import {DataStoreService} from '../store/data-store.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  path = 'assets/images/img-skill/';
  skills: any[];

  project: any[];
  baseurl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(this.baseurl + 'skill')
      .subscribe((data: []) => {
        // console.log(typeof data);
        this.skills = data;
      });
    this.http.get(this.baseurl + 'project')
      .subscribe((data: []) => {
        // console.log(typeof data);
        this.project = data;
      });
    console.log(this.skills);
  }

}
