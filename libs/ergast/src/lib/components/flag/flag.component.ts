import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Driver } from '../../interfaces';
import { countries } from '../../models/countries';

@Component({
  selector: 'mobiquity-workspace-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagComponent implements OnInit {
  @Input() driver?: Driver;
  get countryCode(): string {
    const nationality = this.driver?.nationality;
    if (nationality) {
      const country = countries.find((c) =>
        c.nationality.includes(nationality)
      );
      return country?.alpha_2_code.toLocaleLowerCase() || '';
    }
    return '';
  }
  constructor() {}

  ngOnInit(): void {}
}
