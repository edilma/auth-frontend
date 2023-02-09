
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SignupForm from "../components/SignupForm";

export default function Signup(){
    return (
    <Container className="p-5 custom-login-form" >
        <Row>
            <Col><Header title=" Sign Up"/></Col>
        </Row>
    <Row>
        <Col> <SignupForm /></Col>
    </Row>
    <Row>
        <Col><Link to="/login" className="text-light pt-4 d-block">Already a member? Then login up boo</Link></Col>
    </Row>
    </Container>
    )
        
}