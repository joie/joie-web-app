import { TeacherBankingComponent } from './teacher-banking.component';
import { ProfileModule } from './../../profile/profile.module';
import { NgModule } from '@angular/core';
import { TeacherBankingRoutingModule } from './teacher-banking-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TeacherBankingComponent],
  imports: [SharedModule, TeacherBankingRoutingModule, ProfileModule],
})
export class TeacherBankingModule {}
