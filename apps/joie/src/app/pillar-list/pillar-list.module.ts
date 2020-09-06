import { PillarListComponent } from './pillar-list.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PillarKeywordEmphasisPipe } from './pipes/pillar-keyword-emphasis/pillar-keyword-emphasis.pipe';

@NgModule({
  declarations: [PillarListComponent, PillarKeywordEmphasisPipe],
  imports: [SharedModule],
  exports: [PillarListComponent],
})
export class PillarListModule {}
