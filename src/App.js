import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup"; 
import Header from "./Components/Header";
function App() {
  return (
    <>
    <Router>
      <Header/>

      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/profile" element={<Profile />}/>
         <Route path="/sign-in" element={<Signin />}/>
         <Route path="/offers" element={<Offers />}/>
         <Route path="/sign-up" element={<Signup />}/>
         <Route path="/forgot-password" element={<ForgotPassword />}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
