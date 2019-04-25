import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { StreamResponse } from '../interfaces/stream-response';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  START_ENDPOINT: string = `${location.origin}/api/start`;
  STOP_ENDPOINT: string = `${location.origin}/api/stop`;

  constructor(private http: HttpClient, private auth: AuthService) { }

  public startStream() {
    this.http.get<StreamResponse>(this.START_ENDPOINT, this.auth.getAuthHeader())
    .subscribe((res: StreamResponse) => {
      console.log(`Stream status: ${res.status}`);
    })
  }

  public stopStream() {
    this.http.get<StreamResponse>(this.STOP_ENDPOINT, this.auth.getAuthHeader())
    .subscribe((res: StreamResponse) => {
      console.log(`Stream status: ${res.status}`);
    })
  }
}
