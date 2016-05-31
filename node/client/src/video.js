import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Video {
  heading = 'Video';
  media = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('/api/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('video')
      .then(response => response.json())
      .then(video => this.users = video);
  }
}
