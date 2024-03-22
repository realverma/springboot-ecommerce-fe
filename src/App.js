import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Merchant from './Pages/Merchant';
import User from './Pages/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignup from './Pages/MerchantSignup';
import MerchantHome from './Pages/MerchantHome';
import UserSignUp from './Pages/UserSignUp';
import Userhome from './Pages/Userhome';
import Error from './Pages/Error';
import Protect from './Pages/Protect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/merchant' element={<Merchant/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/merchantsignup' element={<MerchantSignup/>}/>
        <Route path='/usersignup' element={<UserSignUp/>}/>
        <Route path='/merchanthome/*' element={<Protect Child={MerchantHome}/>}/>
        <Route path='/userhome' element={<Userhome/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
