import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockPipe } from 'ng-mocks';

import { LocaleUpperCasePipe } from '@shared/pipes/locale-upper-case.pipe';
import { NavComponent } from './nav.component';

describe('[Integration] NavComponent', () => {
  let spectator: Spectator<NavComponent>;

  const createComponent = createComponentFactory({
    component: NavComponent,
    declarations: [MockPipe(LocaleUpperCasePipe)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
