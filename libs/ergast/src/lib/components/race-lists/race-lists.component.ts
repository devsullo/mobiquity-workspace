import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { SingleRace } from '../../models';

@Component({
  selector: 'mobiquity-workspace-race-lists',
  templateUrl: './race-lists.component.html',
  styleUrls: ['./race-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceListsComponent implements OnInit {
  @Input() races?: Observable<SingleRace[]>;
  constructor() {}

  ngOnInit(): void {}
}
