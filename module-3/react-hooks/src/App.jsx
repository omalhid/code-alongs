// App.jsx
import './App.css';
import { useState } from 'react';
import Counter from './components/01-use-state/Counter';
import Timer from "./components/02-use-state-loop/Timer";   // <== IMPORT
import TimerTwo from "./components/03-use-effect-mounting/TimerTwo";  // <== IMPORT
import TimerThree from "./components/04-use-effect-unmounting/TimerThree"; // <== IMPORT
import TimerFour from "./components/05-use-effect-conditional-updates/TimerFour";
import IronbnbList from './components/IronbnbList';      // <== IMPORT
 
function App() {
  const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}
      {/* {show && <TimerTwo />} */}
      {/* { show && <TimerThree /> } */}
      {/* {show && <TimerFour />} */}
      
      {show && <IronbnbList />}                  {/*   <== ADD   */}
    </div>
  );
}
 
export default App;


