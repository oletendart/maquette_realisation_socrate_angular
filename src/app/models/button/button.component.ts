import { Component, OnInit } from "@angular/core";
enum ButtonType {
  Primary = "Primary"
}

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
