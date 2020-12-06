import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "app/_services/data.service";
import { TokenStorageService } from "app/_services/token-storage.service";

@Component({
  selector: "app-detail-singer",
  templateUrl: "./detail-singer.component.html",
  styleUrls: ["./detail-singer.component.css"],
})
export class DetailSingerComponent implements OnInit {
 
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

  constructor(private service: DataService) {}

  ngOnInit(): void {
    
    this.service.shareSinger.subscribe((x) => (this.singer = x));
  }


  listen(i) {
    this.service.updateData(i);
  }
}
