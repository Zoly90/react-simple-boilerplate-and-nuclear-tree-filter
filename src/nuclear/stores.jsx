import {Store, toImmutable} from 'nuclear-js';
import ActionType from './actionType.jsx'
import actions from './actions.jsx'

const TreeStore = Store({
    getInitialState() {
        return toImmutable({
            folders: actions.getData()
            //searchValue: ''
        });
    },

    initialize() {
        debugger;
        this.on(ActionType.FILTER, filter);
        this.on(ActionType.GET_DATA_SUCCESS, getDataSuccess);
        this.on(ActionType.GET_DATA_ERROR, getDataError);
    }
});

export default TreeStore;

function filter(state, payload) {
    const nextState = state.set('value', payload.value);

    if (state.equals(nextState))  {
        return state;
    }

    return nextState;
}

function getDataSuccess(state, payload){
    return state.set('folders', toImmutable(payload.data));
}

function getDataError(){
    return "ERROR";
}