import { Injectable, linkedSignal, signal } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class LinkedSignalService {
  cart = signal<Product[]>([]);

  totalPrice = linkedSignal(() =>
    this.cart().reduce((total, product) => total + product.price, 0)
  );

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
}
