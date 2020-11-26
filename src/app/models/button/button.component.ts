import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
enum ButtonType {
  Primary = "Primary",
  Secondary = "Secondary",
  Warning = "Warning"
}

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() width: number;
  @Input() btnType: string;

  @Output() click = new EventEmitter();

  get buttonType() {
    switch (this.buttonType) {
      case ButtonType.Primary:
        return "primary-btn";
      case ButtonType.Secondary:
        return "secondary-btn";
      case ButtonType.Warning:
        return "warning-btn";
    }
  }

  constructor() {}

  ngOnInit() {}
}
