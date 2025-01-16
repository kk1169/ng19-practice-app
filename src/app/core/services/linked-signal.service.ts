import { Injectable, signal } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class LinkedSignalService {
  // Signal for the cart items
  cart = signal<Product[]>([]);

  constructor() {}
}
