import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class Service {
  constructor(private http: HttpClient) {}
  get(category: number, type: string, difficulty: string) {
    let url = 'https://opentdb.com/api.php?amount=5';
    if (category) {
      url = url + '&category=' + category;
    }
    if (type) {
      url = url + '&type=' + type;
    }
    if (difficulty) {
      url = url + '&difficulty=' + difficulty;
    }
    return this.http.get(url);
  }
}
