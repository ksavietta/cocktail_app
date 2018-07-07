import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class ApiService {
  API_URL : string = "http://localhost:3000/";

  constructor(public http: HttpClient, public authTokenService: Angular2TokenService) { }

  public get(path, params?) {
    // let params = {test: 'hello'}
    // this.authTokenService.get(path, {params: params}).map(res => res.json()).subscribe(
    //     res   =>    console.log(res),
    //     error =>    console.log(error)
    // );
    return this.authTokenService.get(path, {params: params});
  }
  public post(path:string,body:any) {
    return this.authTokenService.post(path, body);
  }
  // delete method
  public delete(path:string){
    return this.authTokenService.delete(path);
  }
  // update method
  public update(path:string, body:any){
    return this.authTokenService.put(path,body);
  }

  // // read method
  // public get(path, params?) {
  //
  //     var endpoint = this.API_URL + path;
  //     let parameters = new HttpParams(params);
  //
  //     if (params !== undefined && params.toString() !== "") {
  //       if (params.recipeId) {parameters = parameters.append('recipeId', params.recipeId)};
  //       if (params.userEmail) {parameters = parameters.append('userEmail', params.userEmail)};
  //     }
  //     console.log(params)
  //     console.log(parameters)
  //
  //   // Make the API call using the new parameters.
  //   return this.http.get(endpoint, {params: parameters});
  // }
  // // create method
  // public post(path:string,body:any) {
  //
  //     var endpoint = this.API_URL + path;
  //     return this.http.post(endpoint,body);
  //
  // }
  // // delete method
  // public delete(path:string){
  //
  //   var endpoint = this.API_URL + path;
  //   return this.http.delete(endpoint);
  //
  // }
  // // update method
  // public update(path:string, body:any){
  //   var endpoint = this.API_URL + path;
  //   return this.http.put(endpoint,body);
  // }

}
