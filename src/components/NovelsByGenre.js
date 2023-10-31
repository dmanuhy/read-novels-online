import "../assets/css/NovelsByGenre.scss"
import GenreList from "./GenreList";
import NovelList from "./NovelList";
import { useParams } from "react-router-dom";
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
                        <div className="left-content col-12 col-lg-9">
                            <div className="genre-name text-uppercase fs-4">
                                Truyện {genre.name}
                            </div>
                            <NovelList novels={novels} />
                        </div>
                        <div className="right-content col-3 d-none d-lg-block">
                            <div className="genre-introduction mb-4">
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