import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "app/_services/data.service";
import { TokenStorageService } from "app/_services/token-storage.service";

@Component({
  selector: "app-show-list-song",
  templateUrl: "./show-list-song.component.html",
  styleUrls: ["./show-list-song.component.css"],
})
export class ShowListSongComponent implements OnInit {
  songs: any = {
    name: "",
    description: "",
    linkMp3: "",
    linkImg: "",
    author: "",
    creator: "",
    musicType: "",
    album: "",
    view: Number,
  };
  playlist: any = {
    name: "",
    musicType: "",
    description: "",
    songQuantity: "",
    dateCreated: "",
    view: Number,
    linkImg: "",
  };
  singers: any = {
    gender: "",
    birthday: "",
    musicType: "",
    story: "",
    band: "",
    view: "",
    linkImg: "",
    name: "",
    songList:""
  };

  currentUser: any;
  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private data: DataService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.getAllSong();
    this.getAllPlaylist();
    this.currentUser = this.token.getUser();
    this.getAllSinger();
  }
  getAllSong() {
  
    this.http.get("http://localhost:8080/songs/newSong").subscribe(
      (res) => {
        this.songs = res;
      },
      (err) => {
        window.alert("Sai rồi bạn!");
      }
    );
  }
  getAllPlaylist() {
    
    this.http.get("http://localhost:8080/playlists/newPlaylist").subscribe(
      (res) => {
        this.playlist = res;
      },
      (err) => {
        window.alert("Sai rồi bạn!");
      }
    );
  }
  listen(i) {
    this.data.updateData(i);
  }
  listenPlaylist(a) {
    
    this.data.updatePlaylist(a);
    this.router.navigateByUrl("/detailPlaylist");
  }

  getAllSinger() {
  
    this.http.get("http://localhost:8080/singers/newSinger").subscribe(
      (res) => {
        this.singers = res;
      },
      (err) => {
        window.alert("Sai rồi bạn!");
      }
    );
  }

  detailSinger(singer){
    debugger
    this.data.updateSinger(singer);
    this.router.navigateByUrl("/detailSinger");

 
}
}
