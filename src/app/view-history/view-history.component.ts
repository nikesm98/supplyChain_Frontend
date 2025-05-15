import { Component } from '@angular/core';
import { SupplychainService } from '../supply-chain.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  imports: [CommonModule, FormsModule
  ]
})
export class ViewHistoryComponent {
  productId!: number;
  history: string[] = [];
  errorMsg = '';

  constructor(private sc: SupplychainService) {}

  async loadHistory() {
    this.errorMsg = '';
    try {
      this.history = await this.sc.getHistory(this.productId);
    } catch (err: any) {
      this.errorMsg = `Error: ${err.message || err}`;
      this.history = [];
    }
  }
}
