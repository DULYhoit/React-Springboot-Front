import { Form, Button, NavLink } from "react-bootstrap";
import { Link, Route,useNavigate } from "react-router-dom";
import { useState } from "react";
import customAxios from "./../customAxios";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../redux/store";



const LoginForm = (props) => {
  let [userid, setUserid] = useState("");
  let [userpw, setUserpw] = useState("");
  //리덕스 컨텍스트를 이용하기위한 문법
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function login(url, userid, userpw) {
    axios
      .get(`http://localhost:8080/api${url}`, {
        params: {
          id: userid,
          pw: userpw,
        },
      })
      .then((res) => {
        alert('로그인 되셨습니다.')
        
        localStorage.setItem('id',res.data)
        navigate("/")
      
      })
      .catch(() => {
        alert("실패함");
      });
  }
  return (
    <Form className="LoginForm-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control
          type="id"
          placeholder="아이디를 입력하세요."
          onChange={(e) => {
            setUserid(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => {
            setUserpw(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="LoginBtn-container">
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            login("/login", userid, userpw);
          }}
        >
          로그인
        </Button>

        <Link to={"/register"}>
          <Button variant="danger" type="button">
            회원가입
          </Button>
        </Link>
        
      </div>
      
    </Form>
  );
};

export default LoginForm;
