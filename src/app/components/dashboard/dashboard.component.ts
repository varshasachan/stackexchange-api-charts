import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { LanguageServiceService } from 'src/app/services/language-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public languageCount = [];
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public loading: boolean = false;

  public FROM_DATE = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 30);
  public TO_DATE = new Date();
  public PageNumber = '1';
  public PageSize = '20';

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Languages' }
  ];


  constructor(private languageService: LanguageServiceService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): any {
    this.loading = true;
    this.languageService.getLanguageDetails(Math.floor(this.FROM_DATE.getTime() / 1000), Math.floor(this.TO_DATE.getTime() / 1000), this.PageNumber, this.PageSize).subscribe((data: any) => {
      console.log(data.items);
      this.barChartLabels = this.fetchLabels(data.items);
      this.languageCount = this.fetchData(data.items);
      this.barChartData = [{
        data: this.languageCount, label: 'Languages'
      }];
      console.log(this.languageCount);
      console.log(Math.floor(new Date().getTime() / 1000));
      this.loading = false;
    });
  }

  fetchLabels(arr: any) {
    let resLabels = [];

    for (let i = 0; i < arr.length; i++) {
      resLabels.push(arr[i].name);
    }
    return resLabels;
  }

  fetchData(arr: any) {
    let resData = [];

    for (let i = 0; i < arr.length; i++) {
      resData.push(arr[i].count);
    }
    return resData;
  }

  submitDetails() {
    this.getDetails();
  }


}
