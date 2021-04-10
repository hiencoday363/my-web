import {Component, OnInit} from '@angular/core';

import {DataStoreService} from './store/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private datastore: DataStoreService) {
  }

  ngOnInit() {
    // this.datastore.fetch_data();
  }
}
