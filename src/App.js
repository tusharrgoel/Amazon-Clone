import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{} , dispatch] = useStateValue();

  useEffect(() =>{
    //only runs once when app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log("user is  >>>>>",authUser);

      if(authUser){
        // user just logged in / user was logged in
        dispatch({
          type: "SET USER",
          user:authUser
        })
      }else {
        //user logged out
        dispatch({
          type :"SET USER",
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header/>,<Checkout />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[<Header />,<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
