import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from "./components/header/header.component";
import { KnowComponent } from "./components/know/know.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    KnowComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
