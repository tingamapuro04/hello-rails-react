import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGreeting } from "../actions";

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div>
      {/* <h1>{greeting}</h1> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   // return { greeting: state.greeting };
//   return <h1>{state.greeting}</h1>
// };

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
