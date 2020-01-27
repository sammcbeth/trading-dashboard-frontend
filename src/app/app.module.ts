import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoldingsComponent } from './main/holdings/holdings.component';
import { DataComponent } from './main/data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MainModule } from './main/main.module';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: '**', component: PageNotFoundComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MainModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
