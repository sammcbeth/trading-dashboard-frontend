import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { DataComponent } from './data/data.component';
import { ApiService } from '../api.service';



@NgModule({
  declarations: [
    MainComponent,
    HoldingsComponent,
    DataComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ApiService]
})
export class MainModule { }
