import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setresetPassword]= useState("");
  const [error, setError]=useState("");

  //useNavigate
  const navigate= useNavigate();

  //signup function coming from context component
  const {signUp, user}= useUserAuth();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    setError("");
    // console.log("Password is : ",password)
    // console.log("Reset Password is : ",resetPassword)
    if (password!=resetPassword){
      return setError("Passwords donot match");
    }
    try{
        await signUp(email,password);
        navigate("/");
    }
    catch (err){
      setError(err.message)

    }

  }
  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {/* {JSON.stringify(user)} */}
        {error && <Alert variant="danger">{error}</Alert>  }
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Reset Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setresetPassword(e.target.value);
              }}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" >
              Signup
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">LogIn</Link>
      </div>
    </div>
  );
};
export default Signup;
