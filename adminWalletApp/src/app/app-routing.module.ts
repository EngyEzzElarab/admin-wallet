import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { AdjustBalanceComponent } from './adjust-balance/adjust-balance.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {component: UserListComponent,  path: 'user-list' },
  { component: AdjustBalanceComponent, path: 'adjust-balance' },
  { component: TransactionHistoryComponent, path: 'transaction-history' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
