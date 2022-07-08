import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponents';
import Login from './Components/Login';
import Addproduct from './Components/Product';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
import Modal from './Components/modal'; 

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element = {<PrivateComponent/>}>
        <Route path="/" element = {<ProductList/>} />
        <Route path="/add" element = {<Addproduct/>} />
        <Route path="/update/:id" element = {<UpdateProduct/>} />
        <Route path="/profile" element = {<h1>Profile Component</h1>} />
        <Route path="/logout" element = {<h1>Logout Component</h1>} />
        </Route>
        <Route path ="/signup" element = {<Signup />}/>
        <Route path = "/Login" element = {<Login />}/>
      </Routes> 
      </BrowserRouter>
      {/* {openModal && <Modal/>} */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
