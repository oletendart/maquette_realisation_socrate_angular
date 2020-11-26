import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from "./components/header/header.component";
import { KnowComponent } from "./components/know/know.component";
import { DiscipleComponent } from "./components/disciple/disciple.component";
import { MentorComponent } from "./components/mentor/mentor.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { ServicesComponent } from "./components/services/services.component";
import { DownloadComponent } from "./components/download/download.component";
import { FooterComponent } from "./components/footer/footer.component";

import { ButtonComponent } from "./models/button/button.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    KnowComponent,
    DiscipleComponent,
    MentorComponent,
    BenefitsComponent,
    ServicesComponent,
    DownloadComponent,
    FooterComponent,
    ButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
