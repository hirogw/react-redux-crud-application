import React from 'react';
import { render } from '@testing-library/react';

const App = () => {
  const profiles = [
    { name: 'taro', age: 10 },
    { name: 'hanako', age: 5 },
    { name: 'noname' }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

//default値の設定
User.defaultProps = {
  age: 1
}


export default App;
