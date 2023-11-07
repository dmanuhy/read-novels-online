import logo from "../assets/image/logo.png"
import "../assets/css/Header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"
import Select from "react-select";
import axios from "axios";
import AuthenticationForm from "./AuthenticationForm";
const Header = () => {
    const navigator = useNavigate()
    const [genres, setGenres] = useState([]);
    const [novels, setNovels] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchKey, setSearchKey] = useState("");
    const [show, setShow] = useState(false);
    const [userData, setuserData] = useState({});
    const [status, setStatus] = useState("login");
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setStatus("login");
        setShow(true);
    };

    const handleShowRegistered = () => {
        setStatus("register");
        setShow(true);
    };
    const handleLogout = () => {
        let userData = localStorage.getItem("user")
        if (userData) {
            localStorage.removeItem("user")
            navigator("/")
            window.location.reload()
        }
    };

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`/genres?_sort=name`)
            .then(res => setGenres(res.data))
            .catch(err => console.error(err));
        axios.get(`/novels`)
            .then(res => setNovels(res.data))
            .catch(err => console.error(err));
        const userData = localStorage.getItem("user");
        if (userData) {
            const userDataDecode = JSON.parse(userData);
            if (userDataDecode) {
                setuserData(userDataDecode);
            }
        }
    }, [])

    useEffect(() => {
        if (selectedOption !== null && selectedOption.value) {
            let novelId = selectedOption.value
            setSelectedOption(null)
            navigate(`/novels/${novelId}`);
        }
    }, [selectedOption, navigate])

    const buildSearchData = (inputData) => {
        let result = [];
        if (inputData && inputData.length > 0) {
            inputData.forEach((item, index) => {
                let object = {};
                object.label = item.name
                object.value = item.id
                result.push(object);
            })
        }
        return result;
    }

    return (
        <>
            <div className="home-header">
                <AuthenticationForm
                    handleClose={handleClose}
                    show={show}
                    status={status}
                    setStatus={setStatus}
                />
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
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
                                            <div className="genre-list row px-2">
                                                {
                                                    genres && genres.length > 0 &&
                                                    genres.map((item, index) => {
                                                        return (
                                                            <Dropdown.Item as={Link} className="genre-item col-3 w-25 text-white" key={item.id} to={`/genres/${item.id}`}>
                                                                {item.name}
                                                            </Dropdown.Item>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).roleId === 2 &&
                                        <span className="manage-novel">
                                            <Link to={`/editor/novels`} className="text-decoration-none text-white">Quản lí truyện</Link>
                                        </span>
                                    }
                                </div>
                                <div className="right-menu d-flex flex-lg-row align-items-lg-center flex-column mb-lg-0 mb-2">
                                    <div className="me-3 mb-2 mb-lg-0" style={{ width: "250px" }}>
                                        <Select
                                            placeholder="Tìm truyện..."
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            onInputChange={value => {
                                                setSearchKey(value)
                                            }}
                                            inputValue={searchKey}
                                            options={buildSearchData(novels)}
                                            noOptionsMessage={() => "Không tìm thấy truyện"}
                                            onKeyDown={event => {
                                                if (event.keyCode === 32 && searchKey === "") event.preventDefault();
                                            }}
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                        />
                                    </div>
                                    {!userData?.name ? (
                                        <>
                                            <div className="login-btn">
                                                <button className="text-decoration-none text-white dropdown-hover" onClick={handleShow}>Đăng nhập</button>
                                            </div>
                                            <div className="register-btn">
                                                <button className="text-decoration-none text-white dropdown-hover" onClick={handleShowRegistered}>Đăng ký</button>
                                            </div>
                                        </>
                                    ) : (

                                        <>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://truyenchu.vn/img/50.webp"
                                                    style={{ borderRadius: "50%", height: "20px" }}
                                                    alt="avatar"
                                                />
                                                <p
                                                    style={{
                                                        color: "#f2f2f2",
                                                        padding: 0,
                                                        margin: 0,
                                                        marginLeft: "10px",
                                                    }}
                                                >
                                                    {userData?.name}

                                                </p>
                                            </div>
                                            <div className="checkout-btn ms-2">
                                                <button className="text-decoration-none text-white dropdown-hover" onClick={handleLogout}>Logout</button>
                                            </div>
                                        </>
                                    )}

                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >

            <div className="header-introduction container d-flex align-items-center">
                <span>Đọc truyện - tiểu thuyết online, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục.</span>
            </div>
        </>
    )
}

export default Header;