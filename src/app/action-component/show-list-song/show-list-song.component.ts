import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'app/_services/common.service';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-show-list-song',
  templateUrl: './show-list-song.component.html',
  styleUrls: ['./show-list-song.component.css']
})
export class ShowListSongComponent implements OnInit {
  songs: any ={
    name: "",
    description: "",
    linkMp3: "",
    linkImg:"",
    author: "",
    creator: "",
    musicType: "",
    album: "",
    view:Number
  };
  playlist: any = {
    name:"",
    musicType: "",
    description: "",
    songQuantity: "",
    dateCreated:"",
    view:Number,
    linkImg:""
  }
  playlists:any=[];
  currentUser: any;
  constructor(private http: HttpClient,private token: TokenStorageService,private data: DataService) { }

  ngOnInit(): void {
    this.getAllSong();
    this.getAllPlaylist();
    this.currentUser = this.token.getUser();
  }
getAllSong(){
  this.http.get("http://localhost:8080/songs/newSong")
  .subscribe(res => {
      this.songs= res;}, err => {  window.alert("Sai rồi bạn!")})
}
getAllPlaylist(){
  debugger
  this.http.get("http://localhost:8080/playlists/newPlaylist")
  .subscribe(res => {
    debugger
     this.playlist= res;
    }, err => {  window.alert("Sai rồi bạn!")})
}


}
