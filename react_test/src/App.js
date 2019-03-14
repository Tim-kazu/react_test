import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanko", age: 15 },
    { name: "Noname", age: 3}
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old.</div>;
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default App;
