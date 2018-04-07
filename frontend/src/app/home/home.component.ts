import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public defaultPic: string = '../../assets/images/home/image1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
