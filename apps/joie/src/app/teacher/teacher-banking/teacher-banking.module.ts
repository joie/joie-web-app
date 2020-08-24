import { TeacherBankingComponent } from './teacher-banking.component';
import { NgModule } from '@angular/core';
import { TeacherBankingRoutingModule } from './teacher-banking-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AccountModule } from '../../account/account.module';

@NgModule({
  declarations: [TeacherBankingComponent],
  imports: [SharedModule, TeacherBankingRoutingModule, AccountModule],
})
export class TeacherBankingModule {}
