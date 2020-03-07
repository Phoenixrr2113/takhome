import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserFormService {
  url = "http://localhost:8080/api/v1/person";
  constructor(private _http: HttpClient) {}

  addPerson = user => {
    return this._http.post<any>(this.url, user);
  };
}
