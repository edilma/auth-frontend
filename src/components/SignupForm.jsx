 import { useState , useContext} from "react"
 import { useNavigate } from "react-router-dom"
 import { AuthContext } from "../App"

 export default function SignupForm(){
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault()
//make a post request to the API with the form data
fetch("http://127.0.0.1:5002/signup", {
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email &nbsp;
            <input type="email" name="email"
            value={email} onChange={e=>setEmail(e.target.value)}
            /> </label>
            <br></br>
            <label htmlFor="password">Password &nbsp;
            <input type="password" name="password"
            value={password} onChange={e=>setPassword(e.target.value)}
            /></label>
            <input type="submit" value="Sign up"></input>
            
        </form>
    )
}