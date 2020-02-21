import React from 'react';
import { render } from '@testing-library/react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input id="bar" type="text" onChange={() => {console.log('I am clicked')}} />
//     </React.Fragment>
//   );
  
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>Weow!</div>
}




export default App;
