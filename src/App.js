import React from 'react';
import { render } from '@testing-library/react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={() => {console.log('I am clicked')}} />
    </React.Fragment>
  );
  
}

export default App;
