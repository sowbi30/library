import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Edit/:id' Component={Edit}></Route>
        <Route path='/add' Component={Add}></Route>
      </Routes>
    </div>
  );
}

export default App;