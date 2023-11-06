import logo from "../assets/image/logo.png"
import "../assets/css/Header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"
import Select from "react-select";
import axios from "axios";

const Header = () => {

    const [genres, setGenres] = useState([]);
    const [novels, setNovels] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchKey, setSearchKey] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`/genres?_sort=name`)
            .then(res => setGenres(res.data))
            .catch(err => console.error(err));
        axios.get(`/novels`)
            .then(res => setNovels(res.data))
            .catch(err => console.error(err));
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

    const backgroundColorData = () => {
        let data = [
            { label: "Mặc Định", value: "#f4f4f4" },
            { label: "Đen", value: "black" },
            { label: "Trắng", value: "white" },
        ];
        return data
    }

    return (
        <>
            <div className="home-header">
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

                                    <Dropdown className="dropdown text-white genre">
                                        <Dropdown.Toggle className="dropdown-hover">
                                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                                            <span className="ms-1">Tùy Chỉnh</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fs-5 text-white">Chọn Màu Nền</span>
                                                <div style={{ width: "300px" }}>
                                                    <Select
                                                        options={backgroundColorData()}
                                                    />
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
                                            onKeyDown={e => {
                                                if (e.keyCode === 32 && searchKey === "") e.preventDefault();
                                            }}
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                        />
                                    </div>
                                    <div className="login-btn">
                                        <Link to={`/login`} className="text-decoration-none text-white dropdown-hover">Đăng nhập</Link>
                                    </div>
                                    <div className="register-btn">
                                        <Link to={`/register`} className="text-decoration-none text-white dropdown-hover">Đăng ký</Link>
                                    </div>
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