import "../assets/css/NovelsByGenre.scss"
import GenreList from "./GenreList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const NovelsByGenre = () => {
    const { id } = useParams()
    const [genre, setGenre] = useState({});
    const [novelsGenre, setNovelsGenre] = useState([])
    const [novels, setNovels] = useState([]);
    useEffect(() => {
        axios.get(`/genres/${id}`)
            .then(res => setGenre(res.data))
            .catch(err => console.error(err));
        axios.get(`/novelGenre?genreId=${id}`)
            .then(res => setNovelsGenre(res.data))
            .catch(err => console.log(err))
    }, [id])
    useEffect(() => {
        let url = `/novels?`;
        if (novelsGenre.length > 0) {
            for (let i = 0; i < novelsGenre.length; i++) {
                url += `&id=${novelsGenre[i].novelId}`;
            }
        } else {
            url += `id=`;
        }
        axios.get(url)
            .then(res => setNovels(res.data))
            .catch(err => console.error(err));
    }, [novelsGenre])

    return (
        <>
            <div className="genre-body py-4">
                <div className="container">
                    <div className="row">
                        <div className="left-content col-9">
                            <div className="genre-name text-uppercase fs-4">
                                Truyện {genre.name}
                            </div>
                            <div className="novel-list">
                                {
                                    novels && novels.length > 0 ?
                                        novels.map((item, index) => {
                                            return (
                                                <div className="novel row py-1" key={index}>
                                                    <div className="novel-image col-3">
                                                        <img style={{ width: "185px", height: "260px" }} src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="novel-general col-9 d-flex flex-column justify-content-center gap-1">
                                                        <Link className="novel-name text-decoration-none text-dark fw-bold" to={`/novels/${item.id}`}>
                                                            <FontAwesomeIcon icon="fa-solid fa-book" />
                                                            <span className="ms-1">{item.name}</span>
                                                        </Link>
                                                        <div className="novel-author fst-italic">
                                                            <FontAwesomeIcon icon="fa-solid fa-pencil" />
                                                            <span className="ms-1">{item.author}</span>
                                                        </div>
                                                        <div className="novel-introduction">
                                                            <span className="ms-2">{item.introduction}</span>
                                                        </div>
                                                        <div className="novel-newest-chapter">
                                                            <span>Chương Mới Nhất: </span>
                                                            <span className="chapter-link">Chương {item.chapters[item.chapters.length - 1].id}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className="mt-2 text-danger">
                                            Không tìm thấy truyện nào !
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="right-content col-3 row">
                            <div className="genre-introduction col-12 mb-4">
                                <p>{genre.introduction}</p>
                            </div>
                            <GenreList />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NovelsByGenre;