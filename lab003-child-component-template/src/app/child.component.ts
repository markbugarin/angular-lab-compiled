import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  template: `
    <div *ngIf="stopped">
      <h1>Congratulations!</h1>
      <h3>You stopped the child component's counter!</h3>
    </div>
    <h3>Child Counter: {{ counter }}</h3>
  `,
})
export class ChildComponent {
  stopped = false;
  counter = 0;
  intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }
}
