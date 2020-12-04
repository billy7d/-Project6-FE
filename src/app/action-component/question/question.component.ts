import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  link : any;
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
  songses: any ={
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
  currentUser: any;
  constructor(private http: HttpClient,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getAllSong();
    this.currentUser = this.token.getUser(); 
  }

  getAllSong(){ 
    this.http.get("http://localhost:8080/songs")
    .subscribe(res => { 
      this.songs= res;
      var max= this.songs[0].view
      for (const i in this.songs) {
        if(max< this.songs[parseInt(i)].view){
          this.songses= this.songs[parseInt(i)]
        }
     }
     this.link = this.songses.linkMp3;
    }, err => {  window.alert("Sai rồi bạn!")})
  }
}
