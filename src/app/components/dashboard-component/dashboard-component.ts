// dashboard.component.ts
import { Component } from '@angular/core';
import { Team } from '../team-card-component/team-card-component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard-component.html',
})
export class DashboardComponent {
  recentTeams: Team[] = [
    {
      name: 'Argentina',
      confederation: 'CONMEBOL',
      flagUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_qJiGpbokm1gY8f1uXh9rijDif6H2wYJGZ6XETqHMNVZOssDKZMpnYI7dJVJzd3YdPE45UEUzEGH3-SBOY98BF9wTZzzpHp_Yg7VbADFATDEjaDWrHtFg8rxdJk82NgChmNMjw8868UzfbVcOTKpf7bhVzw4Ju4cDfLr0XL9-hikyCZnSf8y1WnxGgm66HEa2WN4yA6iPb1BLje12j3zdjHs1Pd2fKgU3TNLzOWeJnfuH5nwuXFr5KYApK6-ik5YI0KcqgINlauHG',
      points: 0,
      rank: 1,
      group: 'A',
      isFavorite: true,
    },
    {
      name: 'Germany',
      confederation: 'UEFA',
      flagUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA6BeMk7rHSQxNojd_amG02-FTwUqDxuir9QKHgv5V3aRl_83eytB6V5SNQ_KLMpx7E13cLGoOttTPI7vZgEkbSDC4Tq24gpqddRaijTY5KNmlw4XRfUP6RSw-vR8_YvTEyV2cfYsQEavMo6DfelFmh3dFU8QfTMqFf1XJaTzZMMPYVFqQtbC4qaGvokqhkV7eEi5DAmUR9dRnAVae0e8TWjL2LPMHrKfRfVxj1Oqtwxc2q_xF6rQLuJz95acvJ3KT4cyhjnb9ujU6-',
      points: 0,
      rank: 11,
      group: 'E',
      isFavorite: false,
    },
    {
      name: 'Brazil',
      confederation: 'CONMEBOL',
      flagUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCR0P_jUuwaY7ebK23k-PejaVrLX7eHqqqu7xlDX8hkp0V5qeft64Aw8K9mmUewWwJ3ZWwdU2XJr8P4OULEmh4hdIHaXJ7BAeFPSbWY3nQWX95l2rQBn4f-ZEDa63j6hNKLY1Imh5i_rm5osbbDsuJnGecgDxuXTQrXeqvjXTdZ6cenS7D2d8CUQRagOESbMicVfQpEVrgrdO7k118_JVOV-3lumi1FdNj6A8jAmZigmwLHO7f7mFbw3PIK4fgXjMiShJiz9S92nCKE',
      points: 0,
      rank: 5,
      group: 'G',
      isFavorite: false,
    },
  ];
}
