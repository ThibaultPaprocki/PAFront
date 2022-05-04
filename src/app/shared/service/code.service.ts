import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CodeRequest} from "../model/CodeRequest";

@Injectable({
  providedIn: "root",
})
export class CodeService {
  constructor(private httpClient: HttpClient) {
  }

  compilCode(request: CodeRequest) {
    return this.httpClient.put(environment.url + "code/compil", request);
  }

  addCode(request: CodeRequest) {
    return this.httpClient.put(environment.url + "code", request);
  }

  getCode(idUser: number) {
    return this.httpClient.get(`${environment.url}code/username${idUser}`);

  }
}
