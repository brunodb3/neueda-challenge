// url.service.ts
//  - url service declaration
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

// importing environment
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor(private http: HttpClient) {}

  /**
   * @description Sends a target URL to the URL shortener API
   * @param url Target URL to send
   */
  sendUrl(url: string): Observable<any> {
    // creating the HTTP Options (with headers)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // creating the request body
    const requestBody = { originalUrl: url };

    // returning the POST request
    return this.http.post(`${environment.apiUrl}/shorten-url`, requestBody, httpOptions);
  }
}
