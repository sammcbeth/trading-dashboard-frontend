import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  account: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAccount().subscribe(
      data => {
        this.account = data['message'][0]
      }

    )
  }
  showAccount() {
    console.log(this.account)
  }

}
