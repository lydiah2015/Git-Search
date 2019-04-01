import { Component, OnInit } from '@angular/core';
import {GithubsearchService} from "../services/githubsearch.service"
import {Profile} from "./profile";
import {Repository} from "../repositories/repository";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile;
  profileRepos:Repository[];
  searchName:string;
  error:boolean;

  constructor(private githubService:GithubsearchService) {
    this.profileRepos=[];
   }
  

  ngOnInit() {
    this.searchName="lydiah2015";
    this.searchUser();

  }

  searchUser(){
    this.profile=null;
    this.profileRepos=[];
    this.githubService.getUser(this.searchName).then(()=>{
      this.profile=this.githubService.profile
      this.githubService.getUserRepos(this.searchName).then(()=>{
        this.profileRepos=this.githubService.profileRepos;
        this.error=false
        console.log(this.profileRepos);
      })
    }).catch(error=>{
      this.error=true;
      console.log(error)
    })
  }

}
