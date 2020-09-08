import { Injector, NgModule } from '@angular/core';
import { AppInjector } from './app-injector';
import { DynaFormService } from './services/dyna-form.service';

@NgModule({
  imports: [],
  providers: [DynaFormService],
})
export class DynaFormModule {
  constructor(injector: Injector) {
    AppInjector.setInjector(injector);
  }
}
