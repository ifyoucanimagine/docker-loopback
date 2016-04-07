import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users {
  heading = 'Users';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('/api/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('images')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
