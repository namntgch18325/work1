import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CircleCalculatorComponent } from './caculate/caculate.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [
    SecondaryComponent,
    CircleCalculatorComponent
  ],
  bootstrap: [CircleCalculatorComponent]
})
export class AppModule {

}
