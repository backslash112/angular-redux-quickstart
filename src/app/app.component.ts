import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { CounterActions } from './app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // implements OnDestroy
  title = 'app';
  // count: number; // <- New
  // subcription;
  @select() readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: CounterActions) {
    // this.subcription = ngRedux.select<number>('count').subscribe(newCount => this.count = newCount);
    // this.count$ = ngRedux.select<number>('count');
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  } // <- New
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  } // <- New

  // ngOnDestroy() {
    // this.subscription.unsubscribe()
  // }
}
