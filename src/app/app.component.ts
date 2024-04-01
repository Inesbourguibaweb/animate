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
          tranform: "translateX(0) sclae(1)",
        })
      ),
      state(
        "highlight",
        style({
          "background-color": "blue",
          tranform: "translateX(100px) sclae(1)",
        })
      ),
      state(
        "shrunken",
        style({
          "background-color": "blue",
          tranform: "translateX(100px) scale(0.5)",
        })
      ),
      transition("normal <=> highlight", animate(300)),
      transition("highlight => normal", animate(800)),
      transition("shrunken => *", animate(5800)),
    ]),
    trigger("wildState", [
      state(
        "normal",
        style({
          "background-color": "red",
          tranform: "translateX(0) sclae(1)",
        })
      ),
      state(
        "highlight",
        style({
          "background-color": "blue",
          tranform: "translateX(100px) sclae(1)",
        })
      ),
      state(
        "shrunken",
        style({
          "background-color": "blue",
          tranform: "translateX(100px) scale(0.5)",
        })
      ),
      transition("normal <=> highlight", animate(300)),
      transition("highlight => normal", animate(800)),
      transition("shrunken => *", animate(5800)),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  wildState = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state === "normal"
      ? (this.state = "highlight")
      : (this.state = "normal");
    this.wildState === "normal"
      ? (this.wildState = "highlight")
      : (this.wildState = "normal");
  }
  onAdd(item) {
    this.list.push(item);
  }
  onShrink() {
    this.wildState = "shrunken";
  }
}
