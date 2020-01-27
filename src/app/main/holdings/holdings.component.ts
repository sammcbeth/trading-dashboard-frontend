import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  holdings: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPositions().subscribe(
      data => {
        this.holdings = data['message']
      },
      err => {
        console.log(err)
      }
    )
  }
  // showHoldings() {
  //   console.log(this.holdings)
  // }

}
