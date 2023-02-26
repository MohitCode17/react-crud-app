import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserCard from './components/UserCard';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        <Route path='/view/:id' element={<UserCard/>}/>
      </Routes>
    </div>
  )
}

export default App
