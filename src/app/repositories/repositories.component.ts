import { Component, OnInit } from '@angular/core';
import {Repository} from "./repository";
import {GithubsearchService} from "../services/githubsearch.service"

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  searchRepos:Repository[];
  searchName:string;
  error:boolean;

  constructor(public githubService:GithubsearchService) {
    this.searchRepos=[];
   }

  ngOnInit() {
  }

  searchRepo(){
    this.searchRepos=[];
    this.githubService.searchRepos(this.searchName).then(()=>{
      this.searchRepos=this.githubService.searchedRepos;
      this.error=false;
      if(this.searchRepos.length<1){
        this.error=true;
      }

    }).catch(error=>{
      console.log(error)
      this.error=true;
    })
  }

}
