// components/top-navbar/top-navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.html',
  styleUrls: ['./top-navbar.css'],
  standalone: false,
})
export class TopNavbarComponent {
  searchQuery: string = '';
  isSearchFocused: boolean = false;
}
