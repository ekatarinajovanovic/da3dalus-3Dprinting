import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { EstepsCalculatorComponent } from './esteps-calculator/esteps-calculator.component';
import { BedlevelingComponent } from './bedleveling/bedleveling.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilamentComponent } from './filament/filament.component';
import {TypeService} from "./service/type.service";
import {FilamentSlicerComponent} from "./filament-slicer/filament-slicer.component";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InstructionsComponent,
    EstepsCalculatorComponent,
    BedlevelingComponent,
FilamentSlicerComponent,
    FilamentComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatDialogModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
