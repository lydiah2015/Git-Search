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

  constructor(public githubService:GithubsearchService) {
    this.searchRepos=[];
   }

  ngOnInit() {
  }

  searchRepo(){
    this.githubService.searchRepos(this.searchName).then(()=>{
      this.searchRepos=this.githubService.searchedRepos;
    }).catch(error=>{
      console.log(error)
    })
  }

}
