import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { WalletService } from '../services/wallet.service';
import { DatePipe } from '@angular/common';
import { User } from '../models/user.model'; 
import { Transaction } from '../models/transaction.model';
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  users: User[] = [];
  selectedUser:string = '';
  transactions: Transaction[] = [];
  startDate:string ='2023-09-01';
  endDate:string = '2023-09-15';

  constructor(
    private userService: UserService,
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
    this.userService.getUsersFromDB()
    .subscribe(
      (data: User[]) => {
        this.users = data; 
      },
      (error) => {
        console.error('Error while getting the users from db:', error);
      }
    );
  }

  viewTransactionHistory(): void {
    this.walletService.getTransactionHistory(this.selectedUser, this.startDate, this.endDate)
    .subscribe(
      (data: Transaction[]) => {
        this.transactions = data; 
      },
      (error) => {
        console.error('Error while getting the users from db:', error);
      }
    );
  }
}
