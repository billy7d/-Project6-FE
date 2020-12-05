import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
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
  constructor() { }
  updateData(text){
    this.content.next(text);
  }
}
