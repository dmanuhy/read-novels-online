import { useState } from 'react'
import '../assets/css/GenreList.scss'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const GenreList = (props) => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`/genres?_sort=name`)
            .then(res => setGenres(res.data))
            .catch(err => console.error(err));
    }, [])


    return (
        <>
            <div className="novel-genres px-2">
                <div className="novel-genres-title text-center text-uppercase fs-5">Thể Loại Truyện</div>
                <div className="genre-list text-start row px-2 g-2">
                    {
                        genres && genres.length > 0 &&
                        genres.map((item, index) => {
                            return (
                                <div className="genre-item col-6" key={item.id} >
                                    <Link className="d-block text-decoration-none text-dark" to={`/genres/${item.id}`}>{item.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default GenreList;