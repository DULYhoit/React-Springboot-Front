import { InputGroup, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";
import moment from "moment/moment";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //useNavigate
  let navigate = useNavigate();

  //회원가입정보 스테이트
  let [regname, setRegName] = useState("");
  let [regid, setRegid] = useState("");
  let [regidbtn, setRegidbtn] = useState(false);
  let [regpw, setRegpw] = useState("");
  let [regpwbtn, setRegpwbtn] = useState(false);
  let [regpwcheck, setRegpwcheck] = useState("");
  let [regpwcheckbtn, setRegpwcheckbtn] = useState(false);
  let [regemail, setRegemail] = useState("");
  let [regemailcheckbtn, setRegemailcheckbtn] = useState(false);
  let [regbd, setRegbd] = useState();
  let [regbdbtn, setRegbdbtn] = useState(false);
  let [regage, setRegAge] = useState(0);
  let [regsex, setRegsex] = useState("");
  let [count, setCount] = useState(0);
  const now = moment(new Date()).format("YYYY-MM-DD");
  const past = moment(regbd).format("YYYY-MM-DD");
  
  //정규식
  const regexp = new RegExp("^[A-Za-z0-9]{6,12}$");
  
  useEffect(() => {
    if (regpw.match(regexp) == null) {
      setRegpwbtn(false);
    } else {
      setRegpwbtn(true);
    }
  }, [regpw]);

  useEffect(() => {
    if (regpw === regpwcheck && regpw != "") {
      setRegpwcheckbtn(true);
    } else {
      setRegpwcheckbtn(false);
    }
  }, [regpwcheck]);

  //생일
  useEffect(()=>{
    setRegbd(moment(regbd).format('YYYY-MM-DD'))
    setRegAge(now.slice(0,4) - past.slice(0,4));
  },[regbd])

  //id중복확인
  function idCheck(url, regid) {
    if (regid != "") {
      axios
        .get(`http://localhost:8080/api${url}`, {
          params: {
            id: regid,
          },
        })
        .then((res) => {
          if (res.data == false) {
            setRegidbtn(true);
            alert("사용가능한 아이디입니다.");
          } else {
            setRegidbtn(false);
            alert("해당아이디는 이미 존재합니다");
          }
        })
        .catch(() => {
          alert("실패함");
        });
    } else {
      alert("아이디를 입력해주세요.");
    }
  }
  //email중복확인
  function emailCheck(url, regemail) {
    if (regemail != "") {
      console.log(regemail);
      axios
        .get(`http://localhost:8080/api${url}`, {
          params: {
            email: regemail,
          },
        })
        .then((res) => {
          if (res.data == false) {
            setRegemailcheckbtn(true);
            alert("사용가능한 이메일입니다.");
          } else {
            setRegemailcheckbtn(false);
            alert("해당이메일은 이미 존재합니다");
          }
        })
        .catch(() => {
          alert("실패함");
        });
    } else {
      alert("이메일을 입력해주세요.");
    }
  }
  //회원가입
  function register(url,regname,regid,regpw,regemail,regbd,regage,regsex) {
   
    axios.post(`http://localhost:8080/api${url}`,{
      
        regname: regname,
        regid: regid,
        regpw: regpw,
        regemail: regemail,
        regbd: regbd,
        regage:regage,
        regsex: regsex,
      
    }).then(res=>{
      console.log(res.data);
      navigate("/")
    }).catch(()=>{
      console.log('실패함');
      navigate("/")
    })
  }
  return (
    <div className="inputgroup-container">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">이름</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setRegName(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3 inputgroup-id">
        <InputGroup.Text id="inputGroup-sizing-default">아이디</InputGroup.Text>

        <Form.Control
          placeholder="아이디를입력"
          onChange={(e) => {
            setRegid(e.target.value);
          }}
        />

        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            idCheck("/idcheck", regid);
          }}
        >
          중복확인
        </Button>
      </InputGroup>
      {regidbtn == true ? (
        <span style={{ color: "green", fontSize: "12px", margin: "400px" }}>
          사용가능✔
        </span>
      ) : (
        <span style={{ color: "red", fontSize: "12px", margin: "400px" }}>
          아이디를 입력하세요
        </span>
      )}
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호
        </InputGroup.Text>
        <Form.Control
          type="password"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onKeyUp={(e) => {
            setRegpw(e.target.value);
          }}
        />
      </InputGroup>
      {regpwbtn == false ? (
        <span style={{ color: "red", fontSize: "12px", margin: "300px" }}>
          숫자와 문자 포함 형태의 6~12자리 이내로 입력해주세요.
        </span>
      ) : (
        <span style={{ color: "green", fontSize: "12px", margin: "300px" }}>
          사용가능✔
        </span>
      )}
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호 확인
        </InputGroup.Text>
        <Form.Control
          type=""
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setRegpwcheck(e.target.value);
          }}
        />
      </InputGroup>
      {regpwcheckbtn == false ? (
        <span style={{ color: "red", fontSize: "12px", margin: "400px" }}>
          비밀번호가 다릅니다.
        </span>
      ) : (
        <span style={{ color: "green", fontSize: "12px", margin: "400px" }}>
          사용가능✔
        </span>
      )}
      <InputGroup className="mb-3 inputgroup-id">
        <InputGroup.Text id="inputGroup-sizing-default">이메일</InputGroup.Text>

        <Form.Control
          placeholder="example123@exam.com"
          onChange={(e) => {
            setRegemail(e.target.value);
          }}
        />

        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            emailCheck("/emailcheck", regemail);
          }}
        >
          중복확인
        </Button>
      </InputGroup>
      {regemailcheckbtn == true ? (
        <span style={{ color: "green", fontSize: "12px", margin: "400px" }}>
          사용가능✔
        </span>
      ) : (
        <span style={{ color: "red", fontSize: "12px", margin: "400px" }}>
          이메일을 입력해주세요.
        </span>
      )}{" "}
      <InputGroup className="mb-3 inputgroup-id">
        <InputGroup.Text id="inputGroup-sizing-default">생일</InputGroup.Text>

        <Form.Control
          placeholder="xxxx년 mm월 yy일"
         value={moment(regbd).format("YYYY-MM-DD")} 
         />
         
          

        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            if(count == 0){
              setRegbdbtn(true);
              setCount(1);
            }else{
              setCount(0);
            }

          }}
        >
          달력
        </Button>
      </InputGroup>
      {count == 1 ? (
        <div>
          <Calendar onChange={setRegbd} />
          <div className="text-gray-500 mt-4"></div>
        </div>
      ) : null}
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">나이</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          readOnly
          value={regage}
          onChange={(e) => {
            setRegAge(e.target.value);
          }}
        />
      </InputGroup>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3 sex-checkbox">
          <Form.Check
            inline
            label="남자"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onChange={() => {
              setRegsex("남");
            }}
          />
          <Form.Check
            inline
            label="여자"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={() => {
              setRegsex("여");
            }}
          />
        </div>
      ))}
      <div className="register-submit">
      <Button variant="primary" onClick={()=>{
        register('/register',regname,regid,regpw,regemail,regbd,regage,regsex)
      }}>가입</Button>

      </div>
    </div>
  );
  
};

export default Register;
