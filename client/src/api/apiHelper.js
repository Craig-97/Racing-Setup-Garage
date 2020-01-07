import axios from 'axios';
export const API_BASE = 'http://localhost:4000/api';

export const apiGET = (dispatch, pendingAction, successAction, errorAction, url)  => {
    dispatch(pendingAction());
    axios
      .get(`${API_BASE}/${url}`)
      .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(successAction(res.data[url]));
            return res.data[url];
      })
      .catch(error => {
        dispatch(errorAction(error.response));
    })
  };

  export const apiPOST = (dispatch, pendingAction, successAction, errorAction, url, object)  => {
    dispatch(pendingAction());
    axios
      .post(`${API_BASE}/${url}`, object)
      .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(successAction(res.data[url]));
            return res.data[url];
      })
      .catch(error => {
        dispatch(errorAction(error.response));
    })
  };

  export const apiDELETE = (dispatch, pendingAction, successAction, errorAction, id ) => {
    dispatch(pendingAction());
    axios
      .delete(`${API_BASE}/game/${id}`)
      .then(res => {

        if (res.error) {
          throw res.error;
        }

        console.log("API DELETE RES", res)
        
        dispatch(successAction(res.data[url]));
        return res.data[url];
      })
      .catch(error => {
        dispatch(errorAction(error.response));
      });
  };