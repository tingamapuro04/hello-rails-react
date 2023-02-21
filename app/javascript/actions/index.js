export const FETCH_GREETING_REQUEST = "FETCH_GREETING_REQUEST";
export const FETCH_GREETING_SUCCESS = "FETCH_GREETING_SUCCESS";
export const FETCH_GREETING_FAILURE = "FETCH_GREETING_FAILURE";

export const fetchGreeting = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_GREETING_REQUEST });

    return fetch("/api/messages/random_message")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_GREETING_SUCCESS,
          payload: data.message,
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_GREETING_FAILURE,
          payload: error.message,
        })
      );
  };
};
