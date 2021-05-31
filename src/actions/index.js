import axios from 'axios';
export const START_SMURFS_FETCH='START_SMURFS_FETCH'
export const SUCCESSFUL_SMURFS_FETCH='SUCCESSFUL_SMURFS_FETCH'
export const FAILED_SMURFS_FETCH='FAILED_SMURFS_FETCH'
export const ADD_SMURF='ADD_SMURF'
export const SET_SMURFS_ERROR='SET_SMURFS_ERROR'


export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type: START_SMURFS_FETCH});

        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type:SUCCESSFUL_SMURFS_FETCH, payload:res.data})
            console.log('testing response: ',res)
        })
        .catch( err => {
            dispatch({type:FAILED_SMURFS_FETCH, payload:JSON.stringify(err)})
        })
    }
}

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({type: START_SMURFS_FETCH});
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispatch({type:ADD_SMURF, payload: res.data})
        })
        .catch(error => {
            dispatch({type:SET_SMURFS_ERROR, payload:JSON.stringify(error) })
        })
    }

export const smurfsErrorState = error => {
    return {
        type: SET_SMURFS_ERROR,
        payload: error
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.