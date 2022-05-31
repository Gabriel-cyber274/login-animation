import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Signin from './Signin';
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
      </Routes>

    </div>
  );
}

export default App;
