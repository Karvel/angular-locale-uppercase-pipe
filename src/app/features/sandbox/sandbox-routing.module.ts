import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { SandboxLayoutComponent } from './sandbox-layout/sandbox-layout.component';

const routes: Routes = [
  {
    path: 'sandbox',
    component: SandboxLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full',
      },
      {
        path: 'test',
        component: TestComponent,
      },
    ],
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

export const components = [TestComponent, SandboxLayoutComponent];
