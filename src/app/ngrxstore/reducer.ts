import { Action } from '@ngrx/store';

export function counterReducer(state: number = 0, action: Action) {
    if (action.type === 'INCREASE') {
        return state + 1;
    }
    if (action.type === 'DECREASE') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return 0;
    }
    return state;
}
