import { TestBed } from '@angular/core/testing';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { ConstructorComponent } from './constructor.component';

describe('ConstructorComponent', () => {
  let spectator: SpectatorHost<ConstructorComponent>;
  const createHost = createHostFactory(ConstructorComponent);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructorComponent],
    }).compileComponents();

    spectator = createHost(
      `<mobiquity-workspace-constructor [driverConstructor]="constructor"></mobiquity-workspace-constructor>`,
      {
        hostProps: {
          constructor: {
            constructorId: 'mclaren',
          },
        },
      }
    );
  });

  it('should have a constructorId class name', () => {
    expect(
      spectator
        .queryHost('mobiquity-workspace-constructor')
        ?.classList.contains('mclaren')
    ).toBe(true);
  });
});
