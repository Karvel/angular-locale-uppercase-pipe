import { MatCardModule } from '@angular/material/card';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockModule } from 'ng-mocks';

import { TestComponent } from './test.component';

describe('[Integration] TestComponent', () => {
  let spectator: Spectator<TestComponent>;
  const createComponent = createComponentFactory({
    component: TestComponent,
    imports: [MockModule(MatCardModule)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
