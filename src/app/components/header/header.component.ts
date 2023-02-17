import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // toggle: boolean = true;

  navIndex = 0;
  onTabClick(index: any) {
    this.navIndex = index;
  }


}
