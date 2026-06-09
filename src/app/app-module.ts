// dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar';
import { SidebarComponent } from './components/sidebar-component/sidebar-component';
import { MobileNavbarComponent } from './components/mobile-navbar-component/mobile-navbar-component';
import { BentoStatsComponent } from './components/bento-stats-component/bento-stats-component';
import { TeamCardComponent } from './components/team-card-component/team-card-component';
import { GroupStandingsComponent } from './components/group-standings-component/group-standings-component';
import { UpcomingMatchComponent } from './components/upcoming-match-component/upcoming-match-component';

@NgModule({
  declarations: [
    TopNavbarComponent,
    SidebarComponent,
    MobileNavbarComponent,
    BentoStatsComponent,
    TeamCardComponent,
    GroupStandingsComponent,
    UpcomingMatchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardComponent
  ],
  exports: [
    DashboardComponent // Exportado caso seja chamado por outro módulo (ex: AppModule)
  ]
})
export class DashboardModule { }