import { NgModule } from '@angular/core';

import {
  SandboxRoutingModule,
  components as sandboxComponents,
} from './sandbox-routing.module';
import { SharedModule } from '@shared/shared.module';

/**
 * Feature module for all sandbox-related components and dependencies.
 */
@NgModule({
  declarations: [sandboxComponents],
  imports: [SharedModule, SandboxRoutingModule],
})
export class SandboxModule {}
