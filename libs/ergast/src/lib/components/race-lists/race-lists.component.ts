import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FirstStanding, SingleRace } from '../../models';
interface RaceListsData {
  races: SingleRace[];
  raceWinner: FirstStanding[];
}

export type RaceListsDataType = Observable<RaceListsData>;

@Component({
  selector: 'mobiquity-workspace-race-lists',
  templateUrl: './race-lists.component.html',
  styleUrls: ['./race-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceListsComponent implements OnInit, AfterViewInit {
  @Input() data?: RaceListsDataType;
  @Input() excludeScrollHeightEl = '';
  public scrollHeight = 0;

  // exclude scroll height by passed header element height
  get excludeScrollHeight(): number {
    const el = document.querySelector(this.excludeScrollHeightEl);
    return el ? el.clientHeight + 100 : 100;
  }
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setScrollHeight();
  }

  @HostListener('window:resize')
  onload() {
    this.setScrollHeight();
  }

  setScrollHeight() {
    this.scrollHeight =
      document.documentElement.clientHeight - this.excludeScrollHeight;
  }
}
