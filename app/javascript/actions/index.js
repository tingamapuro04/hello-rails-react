export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch("/api/messages/random_message");
  const data = await response.json();

  dispatch({ type: "FETCH_GREETING", payload: data.greeting });
};
