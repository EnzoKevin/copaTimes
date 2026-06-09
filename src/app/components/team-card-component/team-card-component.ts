// components/team-card/team-card.component.ts
import { Component, Input, HostBinding, HostListener } from '@angular/core';

export interface Team {
  name: string;
  confederation: string;
  flagUrl: string;
  points: number;
  rank: number;
  group: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card-component.html',
})
export class TeamCardComponent {
  @Input() team!: Team;

  @HostBinding('class') classes =
    'glass-card rounded-xl p-md flex flex-col gap-md hover:border-primary transition-all group block cursor-pointer';
  @HostBinding('style.transform') transform = 'translateY(0)';
  @HostBinding('class.shadow-md') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
    this.transform = 'translateY(-2px)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
    this.transform = 'translateY(0)';
  }

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.team.isFavorite = !this.team.isFavorite;
  }
}
