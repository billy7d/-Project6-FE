import { DataService } from 'app/_services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-song-of-user',
  templateUrl: './song-of-user.component.html',
  styleUrls: ['./song-of-user.component.css']
})
export class SongOfUserComponent implements OnInit {
  songsOfUser: any = {
    name: "",
    description: "",
    linkMp3: "",
    linkImg:"",
    author: "",
    creator: "",
    musicType: "",
    album: "",
    view:Number
  }

  currentUser: any;

  constructor(private http: HttpClient,private token: TokenStorageService,private data: DataService) { }

  ngOnInit(): void {
    debugger
    this.currentUser = this.token.getUser();
  this.showSongsOfUser();
  this.data.shareSongOfUser.subscribe((x) => (this.songsOfUser = x));
  }

  showSongsOfUser(){
    debugger
    this.currentUser = this.token.getUser();
    this.http.get("http://localhost:8080/user/song/"+this.currentUser.id).subscribe(res => {
    debugger  
    this.songsOfUser= res;}, err => {  window.alert("Sai rồi bạn!")})
  }


  listen(i) {
    this.data.updateData(i);
  }
}
