import reactor from './reactor.jsx'
import ActionTypes from './actionType.jsx'
import $ from 'jquery'

export default {
    setFilter(value)    {
        reactor.dispatch(ActionTypes.FILTER, value)
    },

    getData(){

        $.ajax({
            url: 'http://localhost:3000/src/json.js',
            dataType: 'json',
            cache: false,
            success: function(data) {
                reactor.dispatch(ActionTypes.GET_DATA_SUCCESS, data);
            },
            error: function(err) {
                reactor.dispatch(ActionTypes.GET_DATA_ERROR, err);
            }
        })
        
    }
}

