import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";



export default function Login(){
    return (
    <Container className="p-5 custom-login-form-2" >
        <Row>
            <Col><Header title="Log in"/></Col>
        </Row>
    <Row>
        <Col> <LoginForm /></Col>
    </Row>
    <Row>
        <Col><Link to="/signup" className="text-light pt-4 d-block">Sign Up to become a member?</Link></Col>
    </Row>
    </Container>
    )
        
}