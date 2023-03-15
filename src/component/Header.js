import { Navbar, Container,Nav } from 'react-bootstrap';
import customAxios from './../customAxios';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
const Header = (props) => {
 //로그아웃함수
  let logout = ()=>{
    localStorage.removeItem('id');
    props.setLogincheck(false)
  }
  
  let contextuser = useSelector((state)=>{
    return state
  })
  
    return ( 
        <Navbar bg="light" variant="light">
        <Container >
          <Navbar.Brand>홈페이지이름</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈으로</Nav.Link>
            <Nav.Link href="/notice">게시판</Nav.Link>
            <Nav.Link >기능</Nav.Link>
          </Nav>
          {
            props.logincheck == false ? <Nav.Link href="/login" className='Navbar-login'>로그인</Nav.Link> : <div>
              <span>{localStorage.getItem('id')}</span>
              <Button className='logout-btn' variant="outline-secondary" onClick={()=>{logout()}}>로그아웃</Button>
              </div>
          }
            
        </Container>
      </Navbar>
     );
}
 
export default Header;