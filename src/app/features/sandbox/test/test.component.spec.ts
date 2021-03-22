import { MatCardModule } from '@angular/material/card';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockModule, MockPipe } from 'ng-mocks';

import { LocaleUpperCasePipe } from 'src/app/infrastructure/shared/pipes/locale-upper-case.pipe';
import { TestComponent } from './test.component';

describe('[Integration] TestComponent', () => {
  let spectator: Spectator<TestComponent>;
  const createComponent = createComponentFactory({
    component: TestComponent,
    declarations: [MockPipe(LocaleUpperCasePipe)],
    imports: [MockModule(MatCardModule)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
