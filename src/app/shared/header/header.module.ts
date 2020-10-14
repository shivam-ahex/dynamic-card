import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './component/side-bar/side-bar.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatSidenavModule, RouterModule],
  declarations: [HeaderComponent, SideBarComponent],
  exports: [HeaderComponent],
  entryComponents: [SideBarComponent],
})
export class HeaderModule {}
