import { TeacherBankingComponent } from './teacher-banking.component';
import { NgModule } from '@angular/core';
import { TeacherBankingRoutingModule } from './teacher-banking-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileModule } from '../../account/profile.module';

@NgModule({
  declarations: [TeacherBankingComponent],
  imports: [SharedModule, TeacherBankingRoutingModule, ProfileModule],
})
export class TeacherBankingModule {}
