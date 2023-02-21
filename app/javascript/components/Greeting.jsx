import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../actions/index";

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Greeting;
