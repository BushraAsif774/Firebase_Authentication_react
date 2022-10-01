import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage]= useState("");

  //signup function coming from context component
  const { resetPassword } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("")
    try {
      await resetPassword(email);
      setMessage("Check Your Inbox For Furthur Instruction")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>  }
        {message && <Alert variant="success">{message}</Alert>  }
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

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </div>
          
        </Form>

        <div className="mt-3 text-center">
        <Link to="/">Log In</Link>
      </div>
      <div className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
       
      </div>
    </div>
  );
};
export default ForgotPassword;
