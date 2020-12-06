import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  
  
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
  private content = new BehaviorSubject<any>(this.songs);
  public share = this.content.asObservable();
  updateData(text){
    this.content.next(text);
  }

//
  playlist: any = {
    name:"",
    musicType: "",
    description: "",
    songQuantity: "",
    dateCreated:"",
    view:Number,
    linkImg:""
  }
  private contentPlaylist = new BehaviorSubject<any>(this.playlist);
  public sharePlaylist = this.contentPlaylist.asObservable();
  
  updatePlaylist(playlist){
    this.contentPlaylist.next(playlist);
  }

  singer: any = {
    gender: "",
    birthday: "",
    musicType: "",
    story: "",
    band: "",
    view: "",
    linkImg: "",
    name: "",
    songList: ""
  };
  
  private contentSinger = new BehaviorSubject<any>(this.singer);
  public shareSinger = this.contentSinger.asObservable();
  
  updateSinger(singer){
    debugger
    this.contentSinger.next(singer);
  }

  
  
}
