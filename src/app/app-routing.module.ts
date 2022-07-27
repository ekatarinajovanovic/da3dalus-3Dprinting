import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from './header/header.component';


const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch:"full" },
  {path: "home", component: HomeComponent},
{path: "instructions", component: InstructionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }