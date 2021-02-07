import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
    </React.Fragment>
  );
}

const Cat = ()=>{
  return <div>Meow!</div>
}

export default App;
