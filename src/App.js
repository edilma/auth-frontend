
import './App.css';
import { useState , createContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './scenes/Content';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Welcome from './scenes/Welcome';

export const AuthContext = createContext(null)

function App() {
const [user,setUser] = useState();
  
  return (
    <AuthContext.Provider value={{user,setUser}}>
    <BrowserRouter>
    <div className="App">
      <header className='App-header'>
    <Routes>
    
      <Route path='/secret' element={(user)?<Content/>: <Welcome/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Welcome/>} />

    </Routes>
      </header>
    </div>
    
    
    
    
    </BrowserRouter>
    
    </AuthContext.Provider>
  
  );
}

export default App;
