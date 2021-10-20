import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './caculate.component.html'
})
export class CircleCalculatorComponent {
  circleRadius : number = 0;

  circleCircumference : any = 0;
  circleArea : any = 0;

  circumferenceAutoCalculate: any = 0;
  areaAutoCalc : any = 0;

  validateRadius(input: number): boolean {
    if (input === 0) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmit() :void {
    this.circleCircumference = this.handleSubmitCircumference(this.circleRadius);
    this.circleArea = this.handleSubmitArea(this.circleRadius);
  }

  handleSubmitCircumference(radius: number) :any {
    if (this.validateRadius(radius)) {
      return (2 * Math.PI * radius).toFixed(2);
    } else {
      alert('Invalid input, radius is required and should be > 0.');
    }
  };

  handleSubmitArea(radius: number) :any {
    return (Math.pow(radius, 2) * Math.PI).toFixed(5);
  };

  handleAutoCal() :void {
    this.circumferenceAutoCalculate = this.handleSubmitCircumference(this.circleRadius);
    this.areaAutoCalc = this.handleSubmitArea(this.circleRadius);
  };

  handleChangeScreen() : void {
    
  }
};