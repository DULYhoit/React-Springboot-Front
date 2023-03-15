import { Container,Row,Col,Form } from 'react-bootstrap';

const Detail = () => {

    let text = "아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용아주긴내용"
    return ( 
        <Container>
        <Row>
          <Col>
          <Form.Label>작성자</Form.Label>
          <Form.Control type="email" readOnly value={"어드민"} />
          </Col>
          <Col>
          <Form.Label>작성날짜</Form.Label>
          <Form.Control type="email" readOnly value={"2013.05.21"} />
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Label>글내용</Form.Label>
          <Form.Control as="textarea" rows={3} readOnly value={text} />
          </Col>
        </Row>
      </Container>
         
     );
}
 
export default Detail;