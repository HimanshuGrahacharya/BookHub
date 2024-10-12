import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminPortal from './Components/Admin/AdminPortal';
import UserLogin from './Components/User/UserLogin';
import UserPortal from './Components/User/UserPortal';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       <Route element={<LandingPage/>} path='/'/> 
       <Route element={<AdminLogin/>} path='/adminLogin'/>
       <Route element={<AdminPortal/>} path='/adminPortal/*'/>
       <Route element={<UserLogin/>} path='/userLogin'/>
       <Route element={<UserPortal/>} path='/userPortal/*'/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
