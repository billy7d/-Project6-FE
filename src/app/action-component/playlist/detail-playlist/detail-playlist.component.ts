import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/_services/data.service';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  playlist: any = {
    name:"",
    musicType: "",
    description: "",
    songQuantity: "",
    dateCreated:"",
    view:Number,
    linkImg:""
  }
  constructor(private service: DataService) { }

  ngOnInit(): void {
    debugger
    this.service.sharePlaylist.subscribe(x => this.playlist=x);
  }
  listen(i){
    this.service.updateData(i);
    }

}
