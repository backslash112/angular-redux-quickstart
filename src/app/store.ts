import { Action } from "redux";
import { CounterActions, MyAction } from "./app.actions";

export interface IAppState {
    count: number;
}

export const INITIAL_STATE: IAppState = {
    count: 0,
};

export function rootReducer(lastState: IAppState, action: MyAction): IAppState {
    switch(action.type) {
        case CounterActions.INCREMENT:
            return { count: lastState.count + action.value }
        case CounterActions.DECREMENT:
            return { count: lastState.count -  action.value }
    }
    return lastState;
}