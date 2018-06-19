import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable({
    providedIn: 'root'
  })
export class CounterActions {
    static INCREMENT = 'INCREENT';
    static DECREMENT = 'DECREMENT';

    increment(): Action {
        return { type: CounterActions.INCREMENT };
    }

    decrement(): Action {
        return { type: CounterActions.DECREMENT };
    }



    
}