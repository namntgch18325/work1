import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondaryComponent } from './secondary/secondary.component';
import { CircleCalculatorComponent } from './caculate/caculate.component';
const routes: Routes = [
  {path:"secondary", component:SecondaryComponent},
  {path:"caculate", component:CircleCalculatorComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const RoutingComponent = [SecondaryComponent, CircleCalculatorComponent];