import logo from "../assets/image/logo.webp"
import "../assets/css/header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
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
                                            <span className="">Thể Loại</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="dropdown-menu">
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

                                    <Dropdown className="dropdown text-white genre">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <span className="">Tùy Chỉnh</span>
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
                {/* <nav className="navbar navbar-expand-lg p-0">
                    <div className="container">
                        <img className="navbar-brand" src={logo} alt="Logo" />
                        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex flex-lg-row flex-column justify-content-between">
                                <div className="left-menu d-flex flex-lg-row flex-column align-items-lg-center mb-lg-0 mb-2">
                                    <Dropdown className="dropdown text-white genre my-lg-0 my-2">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <span className="">Thể Loại</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="dropdown-menu">
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

                                    <Dropdown className="dropdown text-white genre my-lg-0 my-2">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <span className="">Tùy Chỉnh</span>
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
                                    <input type="text" className="mx-1 mb-lg-0 mb-2 ps-3 border rounded-1 search"
                                        placeholder="Tìm truyện ..." />
                                    <div className="login-btn my-lg-0 my-2">
                                        <a href="/" className="text-decoration-none text-white dropdown-hover">Đăng nhập</a>
                                    </div>
                                    <div className="logout-btn my-lg-0 my-2">
                                        <a href="/" className="text-decoration-none text-white dropdown-hover">Đăng ký</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav > */}
            </div >

            <div className="header-introduction container">
                <span>Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.</span>
            </div>
        </>
    )
}

export default Header;