import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable({
    providedIn: 'root'
  })
export class CounterActions {
    static INCREMENT = 'INCREENT';
    static DECREMENT = 'DECREMENT';

    increment(value: number): MyAction {
        return { type: CounterActions.INCREMENT, value: value };
    }

    decrement(value: number): MyAction {
        return { type: CounterActions.DECREMENT, value: value};
    }



    
}

export interface MyAction extends Action {
    [value: string]: any
}