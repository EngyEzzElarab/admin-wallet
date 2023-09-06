import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {  
  }
  adjustBalance(userId: string, amount: number, adjustType: 'withdrawal' | 'deposit'): Observable<any> {
    const requestBody = { "amount": amount, "type": adjustType };
    return this.http.post<any>(`${this.apiUrl}/${userId}/adjust-balance`, requestBody);
  }

  getTransactionHistory(userId: string, startDate:string , endDate:string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/${userId}/transactions`);
  }
}
