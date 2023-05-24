import './App.css';
import Layout from './Components/Layout'
import Intro from './Components/Pages/Intro.jsx'
import CBest from './Components/Pages/bests.jsx'


function App() {
  return (
    <div className="App">
      <Layout />
      <Intro />
      <CBest />
    </div>
  );
}

export default App;
