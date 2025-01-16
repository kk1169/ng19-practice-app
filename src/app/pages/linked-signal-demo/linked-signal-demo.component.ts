import { Component, inject } from '@angular/core';
import { Product } from '../../core/models/Product';
import { LinkedSignalService } from '../../core/services/linked-signal.service';

@Component({
  selector: 'app-linked-signal-demo',
  imports: [],
  templateUrl: './linked-signal-demo.component.html',
  styleUrl: './linked-signal-demo.component.scss',
})
export class LinkedSignalDemoComponent {
  linkedSignalService = inject(LinkedSignalService);

  // Initial list of products
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 },
  ];

  // Method to add a product to the cart
  addToCart(product: Product): void {
    this.linkedSignalService.cart.set([
      ...this.linkedSignalService.cart(),
      product,
    ]);
  }

  // // Method to remove a product from the cart
  // removeFromCart(product: Product): void {
  //   this.linkedSignalService.cart.set(
  //     this.linkedSignalService.cart().filter((item) => item.id !== product.id)
  //   );
  // }
}
