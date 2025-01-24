import { Component } from '@angular/core';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-linked-signal-demo',
  imports: [],
  templateUrl: './linked-signal-demo.component.html',
  styleUrl: './linked-signal-demo.component.scss',
})
export class LinkedSignalDemoComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 },
  ];
}
