
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
  return fetch('http://localhost:8080/api/cheese')
    .then(cheeseListRes => {
      console.log(cheeseListRes);
      if (!cheeseListRes.ok) {
        console.log('RESPONSE NOT OKAY');
        return Promise.reject({
          message: 'Response NOT okay'
        });
      } else if (!cheeseListRes.body) {
        console.log('NO RESPONSE');
        return Promise.reject({
          message: 'No response at all!'
        });
      }

      return cheeseListRes.json();
    })

    .then(cheeseList => {
      dispatch(cheeseGetSuccess(cheeseList));
    })
    .catch(err => cheeseGetFailure(err));
}