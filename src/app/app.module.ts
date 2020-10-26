import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
