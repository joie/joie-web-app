import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthorRoutingModule } from './author-routing.module';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostCreateComponent } from './containers/post-create/post-create.component';
import { PostUpdateComponent } from './containers/post-update/post-update.component';
import { AuthorDashboardComponent } from './containers/author-dashboard/author-dashboard.component';

@NgModule({
  declarations: [
    PostFormComponent,
    PostCreateComponent,
    PostUpdateComponent,
    AuthorDashboardComponent,
  ],
  imports: [
    SharedModule,
    AuthorRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    PostCreateComponent,
    PostUpdateComponent,
    AuthorDashboardComponent,
  ],
})
export class AuthorModule {}
