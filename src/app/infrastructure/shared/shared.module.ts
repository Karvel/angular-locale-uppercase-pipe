import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './imports/material.module';

/**
 * Connects modules, pipes, directives, components, and more that do not need to be singleton instances.
 */
@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): { ngModule: typeof SharedModule } {
    return {
      ngModule: SharedModule,
    };
  }
}
