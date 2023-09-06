import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { WalletService } from '../services/wallet.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-adjust-balance',
  templateUrl: './adjust-balance.component.html',
  styleUrls: ['./adjust-balance.component.css']
})
export class AdjustBalanceComponent implements OnInit {
  users: User[] = [];
  selectedUser: string = '';
  adjustmentAmount: number = 0;
  adjustmentType: 'withdrawal' | 'deposit' = 'deposit';
  currBalance: number = 0;

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

  adjustBalance(): void {
    console.log(this.selectedUser)
    console.log(this.adjustmentAmount)
    console.log(this.adjustmentType)
    this.walletService.adjustBalance(this.selectedUser,this.adjustmentAmount ,this.adjustmentType).subscribe(
      (response) => {
        console.log('Adjustment response:', response);
      },
      (error) => {
        console.error('Adjustment error:', error);
      }
    );

  }
}