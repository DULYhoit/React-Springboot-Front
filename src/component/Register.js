import { InputGroup, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <div className="inputgroup-container">
      <InputGroup className="mb-3 inputgroup-id">
      <InputGroup.Text id="inputGroup-sizing-default">
          아이디
        </InputGroup.Text>
        
        <Form.Control placeholder="아이디를입력" />

        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호 확인
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호 확인
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호 확인
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </div>
  );
};

export default Register;
