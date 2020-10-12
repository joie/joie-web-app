import { PillarListComponent } from './components/pillar-list/pillar-list.component';
import { NgModule } from '@angular/core';
import { JoiePrefixPipe } from './pipes/joie-prefix/joie-prefix.pipe';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PillarListComponent, JoiePrefixPipe],
  imports: [SharedModule],
  exports: [PillarListComponent],
})
export class PillarListModule {}
