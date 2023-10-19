import logo from "../assets/image/logo.webp"
import "../assets/css/header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Container } from 'react-bootstrap';
import genres from "../json/genres.json"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    return (
        <>
            <div className="home-header">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img className="navbar-brand" src={logo} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="navbar-nav d-flex flex-lg-row flex-column justify-content-between">
                                <div className="left-menu d-flex flex-lg-row flex-column align-items-lg-center mb-lg-0 mb-2">
                                    <Dropdown className="dropdown text-white genre">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <FontAwesomeIcon icon="fa-solid fa-list" />
                                            <span className="ms-1">Thể Loại</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu">
                                            <div className="genre-list row px-4">
                                                {
                                                    genres && genres.length > 0 &&
                                                    genres.map((item, index) => {
                                                        console.log(item)
                                                        return (
                                                            <div className="genre-item col-3" key={index}>
                                                                <Link className="text-decoration-none text-white" to={`/genres/${item.id}`}>{item.genre}</Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="dropdown text-white genre">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                                            <span className="ms-1">Tùy Chỉnh</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <div className="genre-list row px-2">
                                                <div className="genre-item col-3">
                                                    <a className="text-decoration-none text-white" href="/">Bách Hợp</a>
                                                </div>
                                                <div className="genre-item col-3">
                                                    <a className="text-decoration-none text-white" href="/">Bách Hợp</a>
                                                </div>
                                                <div className="genre-item col-3">
                                                    <a className="text-decoration-none text-white" href="/">Bách Hợp</a>
                                                </div>
                                                <div className="genre-item col-3">
                                                    <a className="text-decoration-none text-white" href="/">Bách Hợp</a>
                                                </div>
                                                <div className="genre-item col-3">
                                                    <a className="text-decoration-none text-white" href="/">Bách Hợp</a>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="right-menu d-flex flex-lg-row align-items-lg-center flex-column mb-lg-0 mb-2">
                                    <input type="text" className="mx-2 ps-3 border rounded-1 search my-1"
                                        placeholder="Tìm truyện ..." />
                                    <div className="login-btn">
                                        <a href="/" className="text-decoration-none text-white dropdown-hover">Đăng nhập</a>
                                    </div>
                                    <div className="register-btn">
                                        <a href="/" className="text-decoration-none text-white dropdown-hover">Đăng ký</a>
                                    </div>
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >

            <div className="header-introduction container d-flex align-items-center">
                <span>Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.</span>
            </div>
        </>
    )
}

export default Header;