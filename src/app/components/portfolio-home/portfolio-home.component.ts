import { Component, OnInit } from "@angular/core";

import { PortfolioService } from "../../../service/portfolio.service";

@Component({
  selector: "app-portfolio-home",
  templateUrl: "./portfolio-home.component.html",
  styleUrls: ["./portfolio-home.component.scss"]
})
export class PortfolioHomeComponent implements OnInit {
  port: Object;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getPortfolioData().subscribe(resp => {
      this.port = resp;
    });
  }
}
