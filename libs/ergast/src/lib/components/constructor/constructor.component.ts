import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';
import { Constructor } from '../../interfaces';

@Component({
  selector: 'mobiquity-workspace-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstructorComponent implements OnInit {
  @Input() driverConstructor?: Constructor;
  @HostBinding('class') get constructorId() {
    return this.driverConstructor?.constructorId;
  }
  constructor() {}

  ngOnInit(): void {}
}
