import { Component, inject } from '@angular/core';
import { LinkedSignalService } from '../../../core/services/linked-signal.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  linkedSignalService = inject(LinkedSignalService);
}
