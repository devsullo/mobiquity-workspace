import { TestBed } from '@angular/core/testing';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { FlagComponent } from './flag.component';

describe('FlagComponent', () => {
  let spectator: SpectatorHost<FlagComponent>;
  const createHost = createHostFactory(FlagComponent);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    spectator = createHost(
      `<mobiquity-workspace-flag [driver]="driver"></mobiquity-workspace-flag>`,
      {
        hostProps: {
          driver: {
            nationality: 'British',
          },
        },
      }
    );
  });

  it('should have correct flag class name', () => {
    expect(
      spectator.query('.flag-icon')?.classList.contains('flag-icon-gb')
    ).toBe(true);
  });
});
