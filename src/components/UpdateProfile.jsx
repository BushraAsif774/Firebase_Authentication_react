import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setresetPassword]= useState("");
  const [error, setError]=useState("");
  const [loading, setLoading] = useState(false)

  //useNavigate
  const navigate= useNavigate();

  //UpdateProfile function coming from context component
  const {user, UpdateEmail, UpdatePassword}= useUserAuth();

  const handleSubmit= (e)=>{
    e.preventDefault();
    setError("");
    if (password!=resetPassword){
      return setError("Passwords donot match");
    }

    //Email Update
    const promises= [];
    if (email!= user.email){
        promises.push(UpdateEmail(email))
    }
    console.log("new email is : ", email);

    //Update Password
    if (password){
        promises.push(UpdatePassword(password))
    }
    console.log("new pass is : ", password);
    Promise.all(promises).then(()=>{
        navigate("/home");
    }).catch(()=>{
        setError("Failed to Update Account")

    }) .finally(() => {
        setLoading(false)
      })

  }
  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth UpdateProfile</h2>
        
        {error && <Alert variant="danger">{error}</Alert>  }

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              defaultValue={user.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Leave blank to keep the same"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Reset Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Leave blank to keep the same"
              onChange={(e) => {
                setresetPassword(e.target.value);
              }}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" >
              Update
            </Button>
          </div>
        </Form>
      </div>
      <div className="mt-3 text-center">
        <Link to="/home">Cancel</Link>
      </div>
    </div>
  );
};
export default UpdateProfile;
