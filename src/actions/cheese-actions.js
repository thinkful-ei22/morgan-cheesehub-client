import {API_BASE_URL} from '../config.js';

export const CHEESE_GET_REQUEST = 'CHEESE_GET_REQUEST';
export function cheeseGetRequest() {
  return {
    type: CHEESE_GET_REQUEST 
  }
}

export const CHEESE_GET_SUCCESS = 'CHEESE_GET_SUCCESS';
export function cheeseGetSuccess(cheeses){
  return {
    type: CHEESE_GET_SUCCESS,
    cheeses: cheeses
  }
}

export const CHEESE_GET_FAILURE = 'CHEESE_GET_FAILURE';
export function cheeseGetFailure(err){
  return {
    type: CHEESE_GET_FAILURE,
    err: err
  }
}

export const fetchCheeses = () => (dispatch) => {
  dispatch(cheeseGetRequest());
  //return fetch('http://localhost:8080/api/cheese')
  return fetch(`${API_BASE_URL}/api/cheese`)
  // return fetch('https://morgan-cheesehub-server.herokuapp.com/api/cheese')
    .then(cheeseListRes => {
      if (!cheeseListRes.ok) {
        return Promise.reject({
          message: 'Response NOT okay',
          status: cheeseListRes.status,
          statusText: cheeseListRes.statusText
        });

      }
      return cheeseListRes.json();
    })

    .then(cheeseList => {
      return dispatch(cheeseGetSuccess(cheeseList));
    })

    .catch(err => {
      console.log('ERR',err);
      return dispatch(cheeseGetFailure(err.statusText));
    });
}