import { NewsModel } from './news.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews():Observable<NewsModel>{
    // return this.http.get<NewsModel>('http://newsapi.org/v2/top-headlines?country=all&category=health&apiKey=38882b48821742b182f1870058dbacc0');
    // return this.http.get<NewsModel>('https://newsapi.org/v2/everything?q=COVID&from=2020-05-03&sortBy=publishedAt&apiKey=38882b48821742b182f1870058dbacc0&pageSize=100&page=1');
    return this.http.get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=38882b48821742b182f1870058dbacc0');
    // https://covidtracking.com/api/press
  }
  getNewsByName(name:string)
  {
    return this.http.get<NewsModel>(`https://newsapi.org/v2/top-headlines?country=${name}&category=health&apiKey=38882b48821742b182f1870058dbacc0`);
  }
}
