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
import { UltimakerCuraComponent } from './ultimaker-cura/ultimaker-cura.component';
import { FilamentComponent } from './filament/filament.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InstructionsComponent,
    EstepsCalculatorComponent,
    BedlevelingComponent,
    UltimakerCuraComponent,
    FilamentComponent,


    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatDialogModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
