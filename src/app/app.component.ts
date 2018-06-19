import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { CounterActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  count: number; // <- New
  subcription;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: CounterActions) {
    this.subcription = ngRedux.select<number>('count').subscribe(newCount => this.count = newCount);
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  } // <- New
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  } // <- New

  ngOnDestroy() {

  }
}
