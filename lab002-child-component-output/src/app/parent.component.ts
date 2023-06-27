import { Component } from "@angular/core";

@Component({
  selector: "parent",
  template: `
    <div *ngIf="currentCounter">
      <h1>Congratulations!</h1>
      <h3>You set the parent's counter to: {{ currentCounter }}</h3>
    </div>
    <child (buttonClick)="buttonClickedHandle($event)"></child>
  `,
})
export class ParentComponent {
  currentCounter;
  buttonClickedHandle(value) {
    this.currentCounter = value;
  }
}
