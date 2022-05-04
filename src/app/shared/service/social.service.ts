import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SocialService {

  constructor(private httpClient: HttpClient) {

  }

  // addComment(request: CommentRequest) {
  //   return this.httpClient.post(environment.url + "social/comment", request);
  // }
  //
  // likeComment(request: CommentDTO) {
  //   return this.httpClient.post(environment.url + "social/like", request);
  // }
  //
  // addFollow(request: FollowDTO){
  //   return this.httpClient.post(environment.url + "social/follow", request);
  // }

  //A VOIR
  getComment(){
    return this.httpClient.get(environment.url + "social/follow");
  }

  //A VOIR
  getFollow(){
    return this.httpClient.get(environment.url + "social/follow");
  }
}
