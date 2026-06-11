import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Adicione esta propriedade para resolver o erro
  recentTeams = [
    {
      id: 1,
      name: 'Brasil',
      flag: '🇧🇷',
      group: 'A',
      confederation: 'CONMEBOL',
      flagUrl: 'https://flagcdn.com/w320/br.png',
      points: 0,
      rank: 5,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'França',
      flag: '🇫🇷',
      group: 'A',
      confederation: 'UEFA',
      flagUrl: 'https://flagcdn.com/w320/fr.png',
      points: 0,
      rank: 2,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Argentina',
      flag: '🇦🇷',
      group: 'B',
      confederation: 'CONMEBOL',
      flagUrl: 'https://flagcdn.com/w320/ar.png',
      points: 0,
      rank: 1,
      isFavorite: true,
    },
  ];

  // Caso você já tenha uma lógica para buscar esses dados,
  // apenas certifique-se de que o nome da variável seja 'recentTeams'.
}
