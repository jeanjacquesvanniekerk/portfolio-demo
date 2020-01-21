import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Portfolio } from "../models/portfolio";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  portfolioURL: string = "../../assets/portfolio.json";

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.portfolioURL);
  }
}
