import { RouterTestingModule } from '@angular/router/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavComponent } from '@shared/components/nav/nav.component';

describe('[Integration] AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(FooterComponent), MockComponent(NavComponent)],
    imports: [RouterTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'angular-locale-uppercase-pipe'`, () => {
    const expectedValue = 'angular-locale-uppercase-pipe';
    expect(spectator.component.title).toEqual(expectedValue);
  });
});
