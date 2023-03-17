import React, { useState, useEffect } from "react";
import "./App.css";
import customAxios from "./customAxios";
import Header from "./component/Header";
import { Link, Route, Routes,redirect } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import Register from "./component/Register";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Notice from "./component/Notice";
import Detail from "./component/Detail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Calendar } from "react-calendar";
import moment from "moment/moment";

function App() {
  //켈렌더 스테이트
  let [date,setDate] = useState(new Date());
  //로그인인지 아닌지 체크하는 상태
  let [logincheck, setLogincheck] = useState(false);
  console.log(logincheck);
//store에 있는 함수를 쓰기위한 dispatch
  let dispatch = useDispatch();
//store에 있는 스테이트를 가져오기위한 context
  let contextuser = useSelector((state) => {
    return state;
  });
  console.log(date)
  useEffect(()=>{
    if(localStorage.getItem('id') != null){
      setLogincheck(true)
      redirect('/')
    }
  })

  
  

  return (
    <div className="App">
      <header className="App-header">
      <Header logincheck={logincheck} setLogincheck={setLogincheck}></Header>
        <Routes>
          <Route path="/" element={<div>
            <h1 style={{textAlign : 'center'}}>{localStorage.getItem('id')}님 로그인 감사합니다.</h1>
          </div>}></Route>
            <Route
              path="/login"
              element={<LoginForm setLogincheck={setLogincheck}></LoginForm>}
            />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/notice" element={<Notice></Notice>}></Route>
            <Route path="/detail" element={<Detail></Detail>}></Route>
        </Routes>
          

      </header>
    </div>
  );
}

export default App;
