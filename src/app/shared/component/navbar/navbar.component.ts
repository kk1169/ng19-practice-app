import { Component, computed, effect, inject } from '@angular/core';
import { LinkedSignalService } from '../../../core/services/linked-signal.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  linkedSignalService = inject(LinkedSignalService);
  cart = this.linkedSignalService.cart();
  totalPrice = computed(() =>
    this.cart.reduce((total, product) => total + product.price, 0)
  );

  constructor() {
    // Effect to log changes in the cart
    effect(() => {
      this.cart = this.linkedSignalService.cart();
      this.totalPrice = computed(() =>
        this.cart.reduce((total, product) => total + product.price, 0)
      );
    });
  }
}
