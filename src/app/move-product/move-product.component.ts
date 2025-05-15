import { Component } from '@angular/core';
import { SupplychainService } from '../supply-chain.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-move-product',
  templateUrl: './move-product.component.html',
  imports: [CommonModule, FormsModule]
})
export class MoveProductComponent {
  productId!: number;
  feedback = '';

  constructor(private sc: SupplychainService) {}

  async move() {
    try {
      await this.sc.moveProduct(this.productId);
      this.feedback = `Product #${this.productId} moved to next stage.`;
      this.productId = 0;
    } catch (err: any) {
      this.feedback = `Error: ${err.message || err}`;
    }
  }
}
