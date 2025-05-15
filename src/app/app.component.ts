// app.component.ts
import { Component } from '@angular/core';
import { SupplychainService } from './supply-chain.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterProductComponent } from './register-product/register-product.component';
import { MoveProductComponent } from './move-product/move-product.component';
import { ViewHistoryComponent } from './view-history/view-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RegisterProductComponent,
    MoveProductComponent,
    ViewHistoryComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  walletAddress: string | null = null;

  constructor(private sc: SupplychainService) {}

  async connectWallet() {
  try {
    if (!(window as any).ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts'
    });

    console.log("Connected account:", accounts[0]);
  } catch (error) {
    console.error("Wallet connection failed:", error);
  }
}
}
