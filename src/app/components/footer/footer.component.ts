import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'app/_services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
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
  constructor(private service: DataService) { }
  data: any= [];
  ngOnInit() {
    this.service.share.subscribe(x=> this.songs = x);
  }
  

}
