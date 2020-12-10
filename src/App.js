import './App.css';
import Mainconponent from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainconponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
