import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css'],
})
export class SongCreateComponent implements OnInit {
  constructor(private httpClient: HttpClient,private tokenService:TokenStorageService, private router:Router,private actRouter:ActivatedRoute) {}

  currentUser:any;
  songs: any = [];
  singers:any=[];
  song: any = {
    name: '',
    album: '',
    author: '',
    creator:{
      "id": null
    },
    singerValues:[],
    musicType: '',
    description:'',
    linkMp3: '',
    linkImg:'',
  };

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  showButton: boolean = true;

  ngOnInit(): void {
    this.getAllSong();
    this.getAllSinger();
    this.currentUser = this.tokenService.getUser();
   
  }




  getAllSong() {
    this.httpClient.get('http://localhost:8080/songs').subscribe((res) => {
      this.songs = res;
    });
  }

  getAllSinger() {
    this.httpClient.get('http://localhost:8080/singers').subscribe((res) => {
      this.singers = res;
    });
  }


  onFileChangedMp3(event) {
    this.selectedFile = event.target.files[0];

    const uploadSongData = new FormData();
    uploadSongData.append(
      'songFile',
      this.selectedFile,
      this.selectedFile.name
    );

    this.httpClient
      .post('http://localhost:8080/songs/uploadmp3', uploadSongData, {  observe: 'response',
      responseType: "json"
      })
      .subscribe((res) => {
        if (res.status === 200) {

          this.song.linkMp3 = res.body.linkMp3;
          this.showButton = false;
        }
      }),((err) =>{});
  }


  onFileChangedAva(event) {
    this.selectedFile = event.target.files[0];

    const uploadImgData = new FormData();
    uploadImgData.append(
      'imgFile',
      this.selectedFile,
      this.selectedFile.name
    );

    this.httpClient
      .post('http://localhost:8080/songs/uploadava', uploadImgData, {  observe: 'response',
      responseType: "json"
      })
      .subscribe((res) => {
        if (res.status === 200) {
          
          this.song.linkImg = res.body.linkImg;

        }
      }),((err) =>{});
  }

  createSong() {
    debugger;
    this.song.creator.id = this.currentUser.id;
    this.httpClient
      .post('http://localhost:8080/songs/create', this.song)
      .subscribe((res) => {
        this.getAllSong();
        window.alert("create success");
        this.router.navigateByUrl("/listSong");
        
      });
  }
}
