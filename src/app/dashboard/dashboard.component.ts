import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  activeTask = 'Daily';
  ngOnInit(): void {}

  changeTab(value: string) {
    this.activeTask = value;
  }
}
