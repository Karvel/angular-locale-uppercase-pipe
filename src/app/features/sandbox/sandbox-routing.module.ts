import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxLayoutComponent } from './sandbox-layout/sandbox-layout.component';

const routes: Routes = [
  {
    path: 'sandbox',
    component: SandboxLayoutComponent,
    children: [],
  },
];

/**
 * Module for all sandbox-related routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxRoutingModule {}

export const components = [SandboxLayoutComponent];
