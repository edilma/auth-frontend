 import Form from "react-bootstrap/Form"
 import Button from "react-bootstrap/Button"

 import { useState , useContext} from "react"
 import { useNavigate } from "react-router-dom"
 import { AuthContext } from "../App"
import { FormGroup } from "react-bootstrap"

 export default function SignupForm(){
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault()
//make a post request to the API with the form data
fetch("https://auth-api-er.web.app/signup", {
//fetch("127.0.0.1:5002/signup", {
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email, password})
})
// create a new user inthe database
//then
.then(res=> res.json())
.then(response=>{
    setUser(response.user)
    navigate("/secret")
})
.catch(err=>alert(err.message))
//1.  do something with the new user
    setUser({email,password})
//2.redirect to the content page
// navigate('/secret')
    }

    return (
        <>

        <form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                name="email"
                type="email" 
                placeholder="Enter Email" 
                value={email} 
                onChange={e=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control 
                name="password"
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
            
        </form>
        </>
    )
}