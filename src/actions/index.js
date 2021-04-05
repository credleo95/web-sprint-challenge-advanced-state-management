import axios from 'axios';
import thunk from 'redux-thunk';

export const START_FETCH = "START_FETCH"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL= "FETCH_FAIL"
export const ADD_SMURF= "ADD_SMURF"
export const ADD_ERROR_VALUE= "ADD_ERROR_VALUE"


export const addSmurf = () => {

}

export const fetchSmurf = (dispatch) => {
dispatch({type:START_FETCH}); 
axios.get()
.then(res => { 
    console.log(res.data)
    dispatch({type:FETCH_SUCCESS, payload: res.data})

})
.catch(error => {
    console.log('Cannot load smurfs')
    dispatch({type:FETCH_FAIL, payload: error})
})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.