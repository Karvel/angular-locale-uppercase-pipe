import { NgModule } from '@angular/core';
import { SharedModule } from '../../infrastructure/shared/shared.module';

import {
  SandboxRoutingModule,
  components as sandboxComponents,
} from './sandbox-routing.module';

/**
 * Feature module for all sandbox-related components and dependencies.
 */
@NgModule({
  declarations: [sandboxComponents],
  imports: [SharedModule, SandboxRoutingModule],
})
export class SandboxModule {}
