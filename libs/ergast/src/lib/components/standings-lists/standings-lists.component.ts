import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FirstStanding } from '../../models';

@Component({
  selector: 'mobiquity-workspace-standings-lists',
  templateUrl: './standings-lists.component.html',
  styleUrls: ['./standings-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandingsListsComponent implements OnInit {
  @Input() firstStandings?: Observable<FirstStanding[]>;
  constructor() {}

  ngOnInit(): void {}
}
