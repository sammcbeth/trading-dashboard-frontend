import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    server = 'https://trading-dashboard-sam.herokuapp.com/api/home/';


    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })
    constructor(
        private httpClient: HttpClient
    ) { }


    getPositions() {
        const url = this.server + 'get_current_positions'
        return this.httpClient.get(url, { headers: this.headers });

    }

    getAccount() {
        const url = this.server + 'get_current_account'
        return this.httpClient.get(url, { headers: this.headers })
    }

    getOrders(author) {
        const url = this.server + 'get_recent_orders'

        return this.httpClient.get(url, { headers: this.headers })

    }

}