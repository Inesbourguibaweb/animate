import {
  Component,
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          "background-color": "red",
          tranform: "translateX(0)",
        })
      ),
      state(
        "highlight",
        style({
          "background-color": "blue",
          tranform: "translateX(100px)",
        })
      ),
      transition("normal => highlight", animate(300)),
      transition("highlight => normal", animate(800)),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state === "normal"
      ? (this.state = "highlight")
      : (this.state = "normal");
  }
  onAdd(item) {
    this.list.push(item);
  }
}
