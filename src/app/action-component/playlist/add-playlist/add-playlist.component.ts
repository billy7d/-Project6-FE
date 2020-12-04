import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {
  listIds = [];
  playlist: any={
    name: "",
    musicType: "",
    description: "",
    songQuantity:[],
    creator:{
      "id": null
    },
  }
  
  currentUser: any;

  song: any= [];
  constructor(private http:HttpClient,private token: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    this.getAllSong();
    this.currentUser = this.token.getUser();
  }

  getAllSong(){
    this.currentUser = this.token.getUser();
    if(this.currentUser == null){
      window.alert("đăng nhập trước khi show playlist bạn nhé")
      this.router.navigateByUrl("/login");
    }
    this.http.get("http://localhost:8080/songs")
    .subscribe(res => {
        this.song= res;}, err => {  window.alert("Sai rồi bạn!")})
  }

  onclickAdd(){
    debugger
    for (const i of this.listIds) {
      var addSong = {"id" : parseInt(i)}
      this.playlist.songQuantity.push(addSong);
    }
    this.playlist.creator.id = this.currentUser.id;
    this.http.post("http://localhost:8080/playlists/createNewPlaylist",this.playlist)
    .subscribe(res => {
      debugger
      this.listIds = null;
      this.playlist.creator =null;
      window.alert("add thanh cong");
      window.location.reload();
    }, err => {
      debugger
        this.listIds = null;
      this.playlist.creator =null;
          window.alert("Sai rồi bạn!")})
    }
  

 
}

