import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FirstMain from './pages/Home/Main/index';
import React from 'react'
import { Routes, Route} from 'react-router-dom';
import FormLayout from './pages/Form/common/Layout/FormLayout';
import JoinForm from './pages/Form/components/Join/joinForm'
import LoginForm from './pages/Form/components/login/loginForm';
import List from './pages/Products/ProductList/ListPage';
import InputProducts from './pages/Products/InpustProducts/inputProducts';
import InputPage from './pages/Products/Input/InputPage';
import OutPage from './pages/Products/Output/OutPage';
import PrivateRoute from './privateRoute';



import { SET_TOKEN, DELETE_TOKEN } from './redux/Auth';
import { useDispatch } from 'react-redux';

 function App() {

  const dispatch = useDispatch();
    useEffect(() =>{
     console.log("APP");
 		axios.post('http://localhost:3001/auth/silent-refresh',{}, {
 			withCredentials : true
 		}).then(res => {
 		  console.log(JSON.stringify(res.data));
      if(res.data.accessToken){
          window.localStorage.setItem("accessToken",res.data.accessToken);
          axios.defaults.headers.authorization = res.data.accessToken;
          if(res.data.accessToken !== undefined){
            dispatch(SET_TOKEN(res.data.accessToken));
          }
      }else{
          window.localStorage.removeItem("accessToken");
          axios.defaults.headers.authorization = "";
          dispatch(DELETE_TOKEN());
      }
 	  });
   },[]);

   return(
      <Routes>
        <Route path="/" element={<FirstMain/>}/>
        <Route path='/login' element={
         <LoginForm/>}/>
        <Route path='/join' element={<JoinForm/>}/>
        <Route path="/product" element={
          <PrivateRoute component={<List/>} />
        }/>

        {/* <Route path="/product" element={
          <PrivateRoute component={<List/>} />
        }/> */}

        <Route path="/product:lnput" element={
          <PrivateRoute component={<InputProducts/>} />
        }/>

        <Route path="/productinput" element={
          <PrivateRoute component={<InputPage/>} />
        }/>
        <Route path="/productoutput" element={
          <PrivateRoute component={<OutPage/>} />
        }/>
        <Route path="*" element={<FirstMain/>}/>
       </Routes>

   )
 }
 export default App;