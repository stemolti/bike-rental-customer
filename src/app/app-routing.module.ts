import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }, { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }, { path: 'booking', loadChildren: () => import('./features/booking/booking.module').then(m => m.BookingModule) }, { path: 'account', loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule) }, { path: 'payment', loadChildren: () => import('./features/payment/payment.module').then(m => m.PaymentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
