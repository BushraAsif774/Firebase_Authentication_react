import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Home } from "./components/Home";
import ProtectRoute from "./components/ProtectedRoute";
import UpdateProfile from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/updateprofile"
                  element={
                    <ProtectRoute>
                      <UpdateProfile />
                    </ProtectRoute>
                  }
                />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route
                  path="/home"
                  element={
                    <ProtectRoute>
                      <Home />
                    </ProtectRoute>
                  }
                />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
