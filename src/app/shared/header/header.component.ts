import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showSideBar: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openSideBar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
