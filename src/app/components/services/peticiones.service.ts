import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {OlvidoClave} from "../../interfaces/olvido.interface";
import 'rxjs/Rx';
import { User, setUser , getDatos, getRanking, getData} from '../models/log.usuario';

@Injectable({providedIn:'root'})
export class PeticionesService{
    olvidURL:string ="https://api.sebastian.cl/academia/api/v1/authentication/forgot/"
    public rut:string;
	public url:string;
	constructor( public _http: HttpClient){

    //this.url="http://138.68.23.14/" //BACK MATI
	   this.url="https://api.sebastian.cl/academia/"
	}
/*	this._http.post('https://api.sebastian.cl/academia/swagger-ui.html#/api/v1/students/',sampleJSON,{
      rut: this.usuario.rut,
      contraseña: this.usuario.password
    }).subscribe((data:any)=>{console.log(data)});
<<<<<<< HEAD
*/

	login(rut: string, password: string) {
        return this._http.post<any>(this.url+'api/v1/authentication/authenticate', { rut, password })
            .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage
                    // to keep user logged in between page refreshes
                    user.authdata = window.btoa(rut + ':' + password);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        //localStorage.getItem(rut)
    }

    getDatos(apiKey:string,rut:string){
        //let params = JSON.stringify(user);
        let option={headers:new HttpHeaders({'X-API-KEY':apiKey})};
        return this._http.get<any>(this.url+'api/v1/student/'+rut,{headers: new HttpHeaders().set("X-API-KEY", apiKey)})
        //.map( res=>res.json());
        .subscribe(
            response=>{
            console.log(response);
        //this._peticionesService.setRut(this.rut);
      },
      error=>{
        console.log(<any>error);
      }
    );
    }

    getData(apiKey:string,rut:string){
        //let params = JSON.stringify(user);
        let option={headers:new HttpHeaders({'X-API-KEY':apiKey})};
        return this._http.get<any>(this.url+'api/v1/teachers/'+rut,{headers: new HttpHeaders().set("X-API-KEY", apiKey)})
        //.map( res=>res.json());
        .subscribe(
            response=>{
            console.log(response);
        //this._peticionesService.setRut(this.rut);
      },
      error=>{
        console.log(<any>error);
      }
    );
    }


    getRanking(apiKey:string,rut:string){
        //let params = JSON.stringify(user);
        let option={headers:new HttpHeaders({'X-API-KEY':apiKey})};
        return this._http.get<any>(this.url+'api/v1/rankings/'+rut,{headers: new HttpHeaders().set("X-API-KEY", apiKey)})
        //.map( res=>res.json());
        .subscribe(
            response=>{
            console.log(response);
        //this._peticionesService.setRut(this.rut);
      },
      error=>{
        console.log(<any>error);
      }
    );
    }

	sendUser(user): Observable<any>{
		let params = JSON.stringify(user);
		let headers= new HttpHeaders().set('Content-Type','aplication/json');

		return this._http.post<any>(this.url+'api/v1/authentication/authenticate',{params});
	}

    getUser(apiKey: string,rut:string){
        //let params = JSON.stringify(user);
        let option={headers:new HttpHeaders({'X-API-KEY':apiKey})};
        return this._http.get<any>(this.url+'api/v1/courses/students/'+rut,{headers: new HttpHeaders().set("X-API-KEY", apiKey)})
        //return this._http.get<any>(this.url+'api/v1/rankings/'+rut,{headers: new HttpHeaders().set("X-API-KEY", apiKey)})



    }

    getProfe(apiKey: string,rut:string){
        //let params = JSON.stringify(user);
        let option={headers:new HttpHeaders({'X-API-KEY':apiKey})};
        return this._http.get<any>(this.url+'api/v1/courses/teachers/'+rut+'/stats/',{headers: new HttpHeaders().set("X-API-KEY", apiKey)})

        .subscribe(
            response=>{
            console.log(response);
        //this._peticionesService.setRut(this.rut);
      },
      error=>{
        console.log(<any>error);
      }
            );
    }

    olvidoClave(olvido:OlvidoClave){
        let body=JSON.stringify(olvido);
        let headers= new HttpHeaders({
            'Content-Type':'apllicacion/json'
        });
        return this._http.post(this.olvidURL+'190330001', body,{headers} )/*
        .map( res=>{
            console.log(res.json());
            return res.json();
        })*/

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
