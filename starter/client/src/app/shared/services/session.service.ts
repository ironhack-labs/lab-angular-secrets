import { User } from './../models/user.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SessionService {
  private static readonly BASE_API: string = environment.apiBase;
  private static readonly SESSIONS_API: string = `${SessionService.BASE_API}`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions = new RequestOptions({ headers: SessionService  .defaultHeaders });

  constructor(
    private http: Http
  ) { }

  signup(user:User): Observable<User> {
    return this.http.post(`${SessionService.SESSIONS_API}/signup`, JSON.stringify(user), SessionService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}
