import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = 'Welcome home';
  someJson: any = {name : 'string'};
  mydate: Date = new Date;
  arr = [1, 2, 2, 3, 4, 4, 34, 3, 34, 4, 34, 43];

  constructor(private homeService:HomeService) { }

  ngOnInit() {
  }

  sendForm(formData) {
    formData.value.userId = '1';
    this.homeService.makePostRequest(formData.value).subscribe(data => console.log(data));
  }

}
