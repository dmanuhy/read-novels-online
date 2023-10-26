import "../assets/css/genre.scss"
import GenreList from "./GenreList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const Genre = () => {
    const { id } = useParams()
    const [genre, setGenre] = useState({});
    useEffect(() => {
        axios.get(`/genres/${id}`)
            .then(res => setGenre(res.data))
            .catch(err => console.error(err));
    }, [id])
    return (
        <>
            <div className="genre-body py-4">
                <div className="container">
                    <div className="row">
                        <div className="left-content col-8">
                            <div className="genre-name text-uppercase fs-4">
                                {genre.name}
                            </div>
                            <div className="novel-list">
                                <div className="novel row py-1">
                                    <div className="novel-image col-3">
                                        <img style={{ width: "100px", height: "150px" }} src="https://static.8cache.com/cover/eJzLyTDWN0-xTC5y9MnP8bI09yk2TXUt8E1zzrMwKQ2qNMw0yzALAEoV-vo45gSW5ZuUVOSbVxib-AZGuub7uWR6RYSFVZSZO-tGFvuG-KYk6RZmpMUnFtuWGxpZ6mYYWhoBACE8H8A=/xuyen-nhanh-nam-than-bung-chay-di.jpg" alt="" />
                                    </div>
                                    <div className="novel-name col-7 d-flex flex-column justify-content-center gap-2">
                                        <div className="fw-bold fs-4">
                                            <FontAwesomeIcon icon="fa-solid fa-book" />
                                            <span className="ms-1">Man Hoa Tam</span>
                                        </div>
                                        <div className="fst-italic">
                                            <FontAwesomeIcon icon="fa-solid fa-pencil" />
                                            <span className="ms-1">Tina Nguyen</span>
                                        </div>
                                    </div>
                                    <div className="novel-newest-chapter col-2 d-flex align-items-center fs-5">
                                        <a href="/" className="text-decoration-none" style={{ color: "#31708f" }}>Chuong 37</a>
                                    </div>
                                </div>
                                <div className="novel row py-1">
                                    <div className="novel-image col-3">
                                        <img style={{ width: "100px", height: "150px" }} src="https://lh3.googleusercontent.com/oPhItNgqVzlAb0H_j8i2W0F3yIgmWCsrOv3nnH5yKCeiOdUjIXZwabzld9U8iWIE3DoeoFa5oRMYqssk8g=w215-h322-rw-no" alt="" />
                                    </div>
                                    <div className="novel-name col-7 d-flex flex-column justify-content-center gap-2">
                                        <div className="fw-bold fs-4">
                                            <FontAwesomeIcon icon="fa-solid fa-book" />
                                            <span className="ms-1">Man Hoa Tam</span>
                                        </div>
                                        <div className="fst-italic">
                                            <FontAwesomeIcon icon="fa-solid fa-pencil" />
                                            <span className="ms-1">Tina Nguyen</span>
                                        </div>
                                    </div>
                                    <div className="novel-newest-chapter col-2 d-flex align-items-center fs-5">
                                        <a href="/" className="text-decoration-none" style={{ color: "#31708f" }}>Chuong 37</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content col-4 row">
                            <div className="genre-introduction col-12 mb-4">
                                <p>{genre.introduction}</p>
                            </div>
                            <GenreList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Genre;