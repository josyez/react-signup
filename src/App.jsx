import { useReducer, useState } from 'react'
import {Button, Container, Alert, Form} from "react-bootstrap"
import reactLogo from './assets/react.svg'
import './App.css'

const Nav = () => {
  return(
    <div className='navlinks'>
      <a href='#'>Link1</a>
      <a href='#'>Link2</a>
      <a href='#'>Link3</a>
    </div>
  )
}

function Main (props) {
  return (
    <div className='main'>
      {props.children}
     </div>
  )
}

 function SideBar() {
  return (
    <div className='sidebar'>
      <a href="">Link1</a>
      <a href="">Link2</a>
    </div>
  )
 }

 function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError ] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    if(username =="user123" && password == "password123"){
    console.log("logged in");
    props.setLoginUser(true)
    setError(false);
    } else {
      setError(true)
    }
  }

  return(
    <Container>
      {
    error ? 
      <Alert variant="danger">
        Wrong username and/or password
      </Alert>
      : 
       <h1 className='align-self-center'>Welcome to the app</h1>
      }

      <Form onSubmit={(e) => handleLogin(e)}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          placeholder="Enter your username" 
          name="username" 
          />
        </Form.Group>        
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          name="password" 
          placeholder="Enter your password" 
          />
      </Form.Group>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" /> */}
      <div className="d-grid gap-2">
        <Button type="submit">Login</Button>
      </div>
      </Form>
    </Container>
  )
}

  

 function Signup(props){

  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoginUser(true)

    console.log(email);
  }

  return (

    <Container>

      <Form onSubmit={(e) => handleLogin(e)}>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          placeholder="Full Name" 
          name="name" 
          />
        </Form.Group>  

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          name="password" 
          placeholder="****" 
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>E-mail</Form.Label>
        <Form.Control 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          name="email" 
          placeholder="enter your email" 
          />
      </Form.Group>
  
  
      {/* <div className="d-grid gap-2">
        <Button type="submit">Login</Button>
      </div> */}
      </Form>
    </Container>

    
  )

 }

 

 function App(){
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="app">
      {
        isUserLoggedIn ?
        <>
          <div className="nav">
             <Nav/>
          </div>
          <div className="content">
            <SideBar />
            
            <Main>
              <p>Hello world</p>
            </Main>
          </div>
        </>
        :
        <>
          {
            showLogin ?
            <Login setLoginUser={setUserLoggedIn}/> 
            :
            <Signup />
            
          } 

          
          <div className= "signup">
          {/* <button onClick={() => setShowLogin((prevState) => !prevState) }>Toggle Login</button> */}
          <button onClick={() => setShowLogin(!showLogin)}>Sign-up</button>
          </div>
        </>
        
       }
      
    </div>
  
  );
}

export default App
