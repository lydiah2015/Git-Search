import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  GitHubApiKey:string=environment.GitHubApiKey;

  constructor(private http:HttpClient) { 
    
  }


  searchUsers(q){

  }

  getUserRepos(q){

  }

  searchRepos(){

  }

}
