import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class PeticionesService{
	public url:string;
	constructor(
		public _http: HttpClient
		){

		this.url="https://api.sebastian.cl/academia/swagger-ui.html#/"
	}
/*	this._http.post('https://api.sebastian.cl/academia/swagger-ui.html#/api/v1/students/',sampleJSON,{
      rut: this.usuario.rut,
      contraseña: this.usuario.password
    }).subscribe((data:any)=>{console.log(data)});
*/


	sendUser(user): Observable<any>{
		let params = JSON.stringify(user);
		let headers= new HttpHeaders().set('Content-Type','aplication/json');

		return this._http.post<any>(this.url+'api/v1/authentication/authenticate',params,{headers:headers});
	}

	/*login(username: string, password: string) {
        return this._http.post<any>(this.url+'api/v1/students', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }*/


}
