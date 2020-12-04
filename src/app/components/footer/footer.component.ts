import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'app/_services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  constructor(private service: DataService) { }
  data: any= [];
  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.data = message);
  }
  

}
