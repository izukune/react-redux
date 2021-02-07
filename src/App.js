import React from 'react';
import PropTypes from 'prop-types'

function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
  ]
  return (
    <React.Fragment>
      {profiles.map((profile, index)=>{
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </React.Fragment>
  );
}

const User = (props)=>{
  return <div>I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  name: 'Noname',
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
