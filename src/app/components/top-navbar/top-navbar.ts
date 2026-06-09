// components/top-navbar/top-navbar.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.html',
  standalone: false,
})
export class TopNavbarComponent {
  searchQuery: string = '';
  isSearchFocused: boolean = false;
}
