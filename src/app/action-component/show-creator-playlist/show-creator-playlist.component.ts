import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-show-creator-playlist',
  templateUrl: './show-creator-playlist.component.html',
  styleUrls: ['./show-creator-playlist.component.css']
})
export class ShowCreatorPlaylistComponent implements OnInit {
  playlist: any=[];
  currentUser: any;
  song: any= [];
  playlists: any = [];
  constructor(private http:HttpClient,private token: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getAllSong();
    
  }
  getAllSong(){
    debugger
    this.currentUser = this.token.getUser();
    if(this.currentUser == null){
      window.alert("đăng nhập trước khi show playlist bạn nhé")
      this.router.navigateByUrl("/login");
    }
    this.http.get("http://localhost:8080/playlists")
    .subscribe(res => {
        debugger
        this.playlist= res;
        for (const i in this.playlist) {
          var a= this.playlist[parseInt(i)].creator.id
          if (this.playlist[parseInt(i)].creator.id == this.currentUser.id) {
            this.playlists.push(this.playlist[i]);  
          }
        }
      }
      , err => {  window.alert("Sai rồi bạn!")})
  }

}
