import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Merchant from './Components/Merchant';
import User from './Components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignup from './Components/MerchantSignup';
import MerchantHome from './Components/MerchantHome';
import UserSignUp from './Components/UserSignUp';
import Userhome from './Components/Userhome';
import Error from './Components/Error';

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
        <Route path='/merchanthome/*' element={<MerchantHome/>}/>
        <Route path='/userhome' element={<Userhome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
