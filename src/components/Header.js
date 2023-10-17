import logo from "../assets/image/logo.webp"
import "../assets/css/header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Header = () => {
    return (
        <>
            <div className="home-header">
                <nav className="navbar navbar-expand-lg p-0">
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
                                            <div className="row">
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Bách Hợp</a></li>
                                                        <li><a className="" href="#">Cổ Đại</a></li>
                                                        <li><a className="" href="#">Cung Đấu</a></li>
                                                        <li><a className="" href="#">Dị Năng</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Đoản Văn</a></li>
                                                        <li><a className="" href="#">Đam Mỹ</a></li>
                                                        <li><a className="" href="#">Huyền Huyễn</a></li>
                                                        <li><a className="" href="#">Kiếm Hiệp</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Lịch Sử</a></li>
                                                        <li><a className="" href="#">Light Novel</a></li>
                                                        <li><a className="" href="#">Mạt Thế</a></li>
                                                        <li><a className="" href="#">Hài Hước</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Nữ Cường</a></li>
                                                        <li><a className="" href="#">Ngược</a></li>
                                                        <li><a className="" href="#">Truyện Teen</a></li>
                                                        <li><a className="" href="#">Trọng Sinh</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="dropdown text-white genre my-lg-0 my-2">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <span className="">Tùy Chỉnh</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <div className="row">
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Bách Hợp</a></li>
                                                        <li><a className="" href="#">Cổ Đại</a></li>
                                                        <li><a className="" href="#">Cung Đấu</a></li>
                                                        <li><a className="" href="#">Dị Năng</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Đoản Văn</a></li>
                                                        <li><a className="" href="#">Đam Mỹ</a></li>
                                                        <li><a className="" href="#">Huyền Huyễn</a></li>
                                                        <li><a className="" href="#">Kiếm Hiệp</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Lịch Sử</a></li>
                                                        <li><a className="" href="#">Light Novel</a></li>
                                                        <li><a className="" href="#">Mạt Thế</a></li>
                                                        <li><a className="" href="#">Hài Hước</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-3">
                                                    <ul className="ul-menu">
                                                        <li><a className="" href="#">Nữ Cường</a></li>
                                                        <li><a className="" href="#">Ngược</a></li>
                                                        <li><a className="" href="#">Truyện Teen</a></li>
                                                        <li><a className="" href="#">Trọng Sinh</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="right-menu d-flex flex-lg-row align-items-lg-center flex-column mb-lg-0 mb-2">
                                    <input type="text" className="mx-1 mb-lg-0 mb-2 ps-3 border rounded-1 search"
                                        placeholder="Tìm truyện ..." />
                                    <div className="login-btn my-lg-0 my-2">
                                        <a className="text-decoration-none text-white dropdown-hover">Đăng nhập</a>
                                    </div>
                                    <div className="logout-btn my-lg-0 my-2">
                                        <a className="text-decoration-none text-white dropdown-hover">Đăng ký</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >

            <div className="header-introduction container">
                <span>Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.</span>
            </div>
        </>
    )
}

export default Header;