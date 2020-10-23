import { PillarListComponent } from './components/pillar-list/pillar-list.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PillarListComponent],
  imports: [SharedModule],
  exports: [PillarListComponent],
})
export class PillarListModule {}
