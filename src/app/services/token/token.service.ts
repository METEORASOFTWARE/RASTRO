import { Injectable } from '@angular/core';
import { EnvtokenService } from '../env/envtoken.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenInterface } from 'src/app/interface/token-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private envSrv: EnvtokenService,
  ) { }

  public generateToken() : Observable<TokenInterface> {

    const data = new URLSearchParams();
		data.set('username', environment.token.username);
		data.set('password', environment.token.password);
		data.set('grant_type', environment.token.grant_type);
		data.set('client_id', environment.token.client_id);

    return this.envSrv.postQuery('', data.toString())
  }

  public removeToken() {
    localStorage.removeItem('token')
  }

  public setToken(data : TokenInterface) {
    localStorage.setItem('token', data.access_token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
