// src/app/supplychain.service.ts

import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

import contractABI from '../../../artifacts/contracts/SupplyChain.sol/SupplyChain.json';

@Injectable({
  providedIn: 'root'
})
export class SupplychainService {
  getHistory(productId: number): string[] | PromiseLike<string[]> {
    throw new Error('Method not implemented.');
  }
private provider!: ethers.BrowserProvider;
private signer!: ethers.Signer;
private contract!: ethers.Contract;

  private contractAddress = '0x9D279b625F4d00976176444FcE28bf2b21A5B5a4';

  constructor() {
    this.initBlockchain();
  }

  async initBlockchain() {
    try {
      // Connect to MetaMask
      this.provider = new ethers.BrowserProvider((window as any).ethereum);
      this.signer = await this.provider.getSigner();
      this.contract = new ethers.Contract(this.contractAddress, contractABI.abi, this.signer);
      console.log('Blockchain initialized');
    } catch (err) {
      console.error('Error initializing blockchain:', err);
    }
  }

  async registerProduct(name: string) {
    try {
      const tx = await this.contract['registerProduct'](name);
      await tx.wait();
      console.log('Product registered:', name);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  }

  async moveProduct(productId: number) {
    try {
      const tx = await this.contract['moveProduct'](productId);
      await tx.wait();
      console.log('Product moved:', productId);
    } catch (err) {
      console.error('Movement failed:', err);
    }
  }

  async getProductHistory(productId: number): Promise<string[]> {
    try {
      const history = await this.contract['getProductHistory'](productId);
      return history;
    } catch (err) {
      console.error('History fetch failed:', err);
      return [];
    }
  }
}
