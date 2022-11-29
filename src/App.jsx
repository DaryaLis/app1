/*import { useState } from 'react'
import reactLogo from './assets/react.svg'*/

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </div>
  )
}*/

import React from 'react'

function App () {

let likes = 0; /*создали счетчик кол-ва лайков*/

function increment() {
  likes += 1;
  console.log(likes);
};

function decrement() {
  likes -= 1;
  console.log(likes);
};

  return (
    <div className="App">
<h1>{likes}</h1>

    <button onClick={increment}>Increment</button>
    
    <button onClick={decrement}>Decrement</button>
    </div>
  )
};

export default App

 /* НЕ JSX синтаксис!
    React.createElement('button', {
        onClick: () => console.log('CLICK')
    }, 'Нажми на меня!'), */
