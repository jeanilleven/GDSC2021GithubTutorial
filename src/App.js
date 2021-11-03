import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      
      <h1>Another Text Here</h1>
    </div>
  );
}

export default App;
