import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './imports/material.module';

import { components } from './components';

/**
 * Connects modules, pipes, directives, components, and more that do not need to be singleton instances.
 */
@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, components],
})
export class SharedModule {
  static forRoot(): { ngModule: typeof SharedModule } {
    return {
      ngModule: SharedModule,
    };
  }
}
