// dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { TopNavbarComponent } from './components/top-navbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { BentoStatsComponent } from './components/bento-stats/bento-stats.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { GroupStandingsComponent } from './components/group-standings/group-standings.component';
import { UpcomingMatchComponent } from './components/upcoming-match/upcoming-match.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TopNavbarComponent,
    SidebarComponent,
    MobileNavbarComponent,
    BentoStatsComponent,
    TeamCardComponent,
    GroupStandingsComponent,
    UpcomingMatchComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DashboardComponent, // Exportado caso seja chamado por outro módulo (ex: AppModule)
  ],
})
export class DashboardModule {}
