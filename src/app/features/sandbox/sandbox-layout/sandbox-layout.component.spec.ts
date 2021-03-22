import { RouterTestingModule } from '@angular/router/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { SandboxLayoutComponent } from './sandbox-layout.component';

describe('[Integration] SandboxLayoutComponent', () => {
  let spectator: Spectator<SandboxLayoutComponent>;
  const createComponent = createComponentFactory({
    component: SandboxLayoutComponent,
    imports: [RouterTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
