import {Store, toImmutable} from 'nuclear-js';
import actions from './actionType.jsx'

const items = Store({
    getInitialState() {
        return toImmutable({
            folders: [],
            searchValue: ''
        });
    },

    initialize() {
        this.on(actions.FILTER, filtering);
        this.on(actions.GET_DATA_SUCCESS, getDataSuccess);
        this.on(actions.GET_DATA_ERROR, getDataError);
    }
});

export default items;

var folders = [];

function filtering(items, string, self) {
    let dontNeed = [], filteredList = [];

    items.forEach(function (item) {
        if (item.type === 'folder' && item.name.indexOf(string) > -1) {
            filteredList.push(item);
        } else    {
            if (item.type === 'folder' && item.name.indexOf(string) > -1){
                filteredList.push(item);
                return filteredList;
            } else  {
                if (item.type === 'folder') {
                    dontNeed = self.filtering(item.children, string, self);
                    dontNeed.forEach(function (something){
                        filteredList.push(something);
                    });
                } else  {
                    if (item.type === 'file' && item.name.indexOf(string) > -1)
                        filteredList.push(item);
                }
            }
        }
    });

    return toImmutable(filteredList);
}

function getDataSuccess(state, payload){
    console.log(payload);
    return state.set('folders', toImmutable(payload.data));
}

function getDataError(){
    return "ERROR";
}

// items = data;
// folders = data;