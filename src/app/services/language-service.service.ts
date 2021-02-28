import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
  
  constructor(private http: HttpClient) { }

  getLanguageDetails(fromdate: any, todate: any, page: any, pagesize: any): any {
    const url = `https://api.stackexchange.com/2.2/tags?&site=stackoverflow` + `&page=${page}` + `&pagesize=${pagesize}`+ `&fromdate=${fromdate}` + `&todate=${todate}`;
    return this.http.get(url);
  }
}
