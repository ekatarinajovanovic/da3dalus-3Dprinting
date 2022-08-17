import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from './header/header.component';
import { EstepsCalculatorComponent } from './esteps-calculator/esteps-calculator.component';
import { BedlevelingComponent } from './bedleveling/bedleveling.component';
import { FilamentComponent } from './filament/filament.component';


const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch:"full" },
  {path: "home", component: HomeComponent},
  {path: "instructions/:id", component: InstructionsComponent},
  {path: "e-steps-calculator", component: EstepsCalculatorComponent},
  {path: "bedleveling/:type", component:BedlevelingComponent},
  {path: "filaments", component:FilamentComponent}


//{path: "instructions", component: InstructionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }