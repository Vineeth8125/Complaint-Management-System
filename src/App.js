
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginRegister/LoginPage";
import RegisterPage from "./components/LoginRegister/RegisterPage";
import ForgotPage from "./components/ForgotPage";
import Home from "./components/Home/Home";
import ComplaintForm from "./components/ComplaintForm";
import Users from "./components/Home/Users";
import AdminComplaints from "./components/Home/AdminComplaints";
import { BrowserRouter as Router } from "react-router-dom";
import Admin from "./components/Home/admin";
import AllComplaints from "./components/Home/AllComplaints"
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route> 
          <Route path='/register' element={<RegisterPage/>}></Route> 
          <Route path='/forgot' element={<ForgotPage/>}></Route> 
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/ComplaintForm' element={<ComplaintForm/>}></Route>
          <Route path='/admin-complaints' element={<AllComplaints />}></Route>  
          <Route path='/login' element={<LoginPage/>}></Route> 
          <Route path='/register' element={<RegisterPage/>}></Route> 
          <Route path='/forgot' element={<ForgotPage/>}></Route> 
          <Route path='/users' element={<Users/>}></Route>
          <Route path="/Main_Home" element={<Admin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
