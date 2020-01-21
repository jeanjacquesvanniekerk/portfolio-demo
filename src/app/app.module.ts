import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PortfolioHomeComponent } from "./components/portfolio-home/portfolio-home.component";
import { PortfolioService } from "../service/portfolio.service";

@NgModule({
  declarations: [AppComponent, PortfolioHomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
