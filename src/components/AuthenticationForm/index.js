import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthenticationForm({
  show,
  handleClose,
  status = "login",
  setStatus,
}) {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formRegister, setFormRegister] = useState({
    username: "",
    password: "",
    name: "",
    isActived: true,
    roleId: "3",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    axios
      .get(
        `/accounts?username=${formData?.username}&password=${formData?.password}`
      )
      .then((response) => {
        if (response?.data && response?.data.length) {
          console.log()
          alert("Login successful");
          localStorage.setItem("user", JSON.stringify(response?.data[0]));
          if (response?.data[0].roleId === 2) {
            navigate(`editor/novels`)
          }
          window.location.reload();
        } else {
          alert("Check your username and password. Then try again.");
        }
      })
      .catch((error) => {
        alert("Check your username and password. Then try again.", error);
      });
  };
  const handleRegister = () => {
    if (confirmPassword !== formRegister.password) {
      alert("Confirm Password wrong");
      return;
    }
    axios
      .post(`/accounts`, formRegister)
      .then((response) => {
        if (response) {
          alert("Register successful");
          localStorage.setItem("user", JSON.stringify(response?.data));
          window.location.reload();
        }
      })
      .catch((error) => {
        alert("Try again.", error);
      });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "700", padding: "0 2rem" }}>
          {status === "login" ? "Đăng nhập" : "Đăng kí"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "1rem 3rem" }}>
        {status === "login" ? (
          <>
            <Form.Label htmlFor="inputPassword5">Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              value={formData.username}
              placeholder="Nhập tên đăng nhập"
              style={{ borderRadius: "9999px" }}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
            <Form.Label htmlFor="inputPassword5" className="mt-2">
              Mật khẩu
            </Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              placeholder="******"
              aria-describedby="passwordHelpBlock"
              value={formData.password}
              style={{ borderRadius: "9999px" }}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </>
        ) : (
          <>
            <Form.Label htmlFor="inputPassword5">Họ và tên</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              value={formRegister.name}
              placeholder="Họ và tên"
              style={{ borderRadius: "9999px" }}
              onChange={(e) => {
                setFormRegister({ ...formRegister, name: e.target.value });
              }}
            />
            <Form.Label htmlFor="inputPassword5">Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              value={formRegister.username}
              placeholder="Nhập tên người dùng"
              style={{ borderRadius: "9999px" }}
              onChange={(e) => {
                setFormRegister({ ...formRegister, username: e.target.value });
              }}
            />
            <Form.Label htmlFor="inputPassword5" className="mt-2">
              Mật khẩu
            </Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              placeholder="******"
              aria-describedby="passwordHelpBlock"
              value={formRegister.password}
              style={{ borderRadius: "9999px" }}
              onChange={(e) => {
                setFormRegister({ ...formRegister, password: e.target.value });
              }}
            />
            <Form.Label htmlFor="inputPassword5" className="mt-2">
              Comfirm Password
            </Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              placeholder="******"
              aria-describedby="passwordHelpBlock"
              value={confirmPassword}
              style={{ borderRadius: "9999px" }}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </>
        )}
        <Button
          className="mt-4"
          style={{
            width: "100%",
            backgroundColor: "#b78a28",
            border: "1px solid #b78a28",
            borderRadius: "9999px",
          }}
          onClick={status === "login" ? handleLogin : handleRegister}
        >
          {status === "login" ? "Đăng nhập" : "Đăng kí"}
        </Button>
      </Modal.Body>

      <Modal.Footer className="justify-content-center">
        {status === "login" ? (
          <p>
            Bạn chưa có tài khoản?{" "}
            <a
              href="#"
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => setStatus("register")}
            >
              Đăng ký ngay
            </a>
          </p>
        ) : (
          <p>
            Bạn đã có tài khoản?{" "}
            <a
              href="#"
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => setStatus("login")}
            >
              Đăng Nhập
            </a>
          </p>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default AuthenticationForm;
