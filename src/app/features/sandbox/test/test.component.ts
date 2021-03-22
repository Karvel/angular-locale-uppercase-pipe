import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
