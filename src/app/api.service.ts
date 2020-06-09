import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
  getHeadlines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=be75cffe1ea5486bba11b42530437aec');
  }
  byCategory(category){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category='+ category +'&apiKey=be75cffe1ea5486bba11b42530437aec');
    
  }
}
