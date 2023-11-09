import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import { AuthContextProvider } from './context/AuthContext.js';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Account from './pages/Account.jsx';
import ProtectedRoute from './components/ProtectedRoute.js';


function App() {
  
  return (
<>
<AuthContextProvider>
<Navbar/>
<Routes>
  <Route path='/' element = {<Home />}/>
  <Route path='/login' element ={<Login/>}/>
  <Route path='/signup' element ={<SignUp/>}/>
  <Route path='/account' element ={<ProtectedRoute><Account/></ProtectedRoute> }/>
</Routes>
</AuthContextProvider>

</>
  );
}

export default App;
