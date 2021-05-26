import React , {useEffect} from 'react';
import Main from './container/main'
import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos.init({duration : 1500});
  } , [])

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
