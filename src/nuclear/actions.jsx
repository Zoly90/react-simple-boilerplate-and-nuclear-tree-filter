import reactor from './reactor.jsx'
import actions from './actionType.jsx'
import $ from 'jquery'

export default {
    setFilter(event)    {
        reactor.dispatch(actions.FILTER, event)
    },

    getData(){
    //let items = [];

        $.ajax({
            url: 'http://localhost:3000/src/json.js',
            dataType: 'json',
            cache: false,
            success: function(data) {
                reactor.dispatch(actions.GET_DATA_SUCCESS, data);
            },
            error: function(err) {
                reactor.dispatch(actions.GET_DATA_ERROR, err);
            }
        })

    //return toImmutable(items);
    }
}

