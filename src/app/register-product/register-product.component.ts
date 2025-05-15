import { Component } from '@angular/core';
import { SupplychainService } from '../supply-chain.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent {
  productName = '';
  feedBack= '';

  constructor(private sc: SupplychainService){}

  async register() {
    try {
      await this.sc.registerProduct(this.productName);
      this.feedBack = `Product "${this.productName}" registered!`;
      this.productName = '';
    } catch (err: any) {
      this.feedBack = `Error: ${err.message || err}`;
    }
  }

}
