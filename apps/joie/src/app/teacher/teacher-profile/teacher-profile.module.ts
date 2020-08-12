import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TeacherProfileRoutingModule } from './teacher-profile-routing.module';
import { NgModule } from '@angular/core';
import { TeacherProfileComponent } from './teacher-profile.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TeacherProfileComponent],
  imports: [
    SharedModule,
    TeacherProfileRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class TeacherProfileModule {}
