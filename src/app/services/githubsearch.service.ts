import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"
import {HttpClient} from "@angular/common/http";


interface  ProfileInterface{
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  email: string;
  public_repos: number;
  followers: number;
  following: number;
}


export interface RepositoriesInterface {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

interface Item {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  GitHubApiKey:string=environment.GitHubApiKey;

  constructor(private http:HttpClient) { 

  }


  getUser(username:string){
    let promise=new Promise((resolve,reject)=>{
      this.http.get<ProfileInterface>("https://api.github.com/users/"+username+"?access_token="+this.GitHubApiKey).toPromise().then(
        res=>{
          console.log(res)
          resolve()
        },
        error=>{
          console.log(error)
          reject()
        }
      )
    })
    return promise;

  }

  getUserRepos(username:string){
    let promise=new Promise((resolve,reject)=>{
      this.http.get<RepositoriesInterface>("https://api.github.com/users/"+username+"/repos?access_token="+this.GitHubApiKey).toPromise().then(
        res=>{
          console.log(res)
          resolve()
        },
        error=>{
          console.log(error)
          reject()
        }
      )
    })
    return promise;

  }

  searchRepos(query:string){
    let promise=new Promise((resolve,reject)=>{
      this.http.get<RepositoriesInterface>("https://api.github.com/search/repositories?q="+query+"&access_token="+this.GitHubApiKey)
      .toPromise().then(
        res=>{
          console.log(res)
          resolve()
        },
        error=>{
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }

}






